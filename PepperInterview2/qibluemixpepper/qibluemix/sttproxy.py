# -*- coding: utf-8 -*-

import json
from qibluemix import get_logger
from datetime import datetime,timedelta


logger = get_logger()


class STTProxy:
    u"""
    Pepperのマイクから拾った音声をテキストに変換するプロキシ。
    変換にはBluemix Speech To Textを用い、WebSocketで音声データを流し続ける。
    変換結果はPepperのメモリに格納される。
    Memory については pepper.recorder 参照
    streaming_recorder -> watson_recognize_stream -> speech_recognition_memory
    """

    #def__init__(self, streaming_recorder, watson_recognize_stream, speech_recognition_memory, confidence=0.4):
    def __init__(self, streaming_recorder, watson, speech_recognition_memory, confidence=0.4):
        # self.recorder = streaming_recorder
        # self.recognize_stream = watson_recognize_stream
        # self.memory = speech_recognition_memory
        # self.confidence = confidence  # 許容値(0.0~1.0)
        token = self.get_token(watson)
        self.datetime = datetime.now()
        self.watson = watson
        self.recorder = streaming_recorder
        #self.recognize_stream = watson_recognize_stream
        self.recognize_stream = watson.recognize_stream(token)
        self.memory = speech_recognition_memory
        self.confidence = confidence  # 許容値(0.0~1.0)

    def init(self):
        self.memory.init_events(self._on_received_status)

    def start(self):
        if self.memory.status != "running":
            logger.debug("[STTProxy] start speech to text")
            self.memory.start()
            self.recognize_stream.run(
                on_open=self._on_stream_open,
                on_close=self._on_stream_close,
                on_error=self._on_stream_error,
                on_message=self._on_stream_message)

    def stop(self):
        if self.memory.status != "stop":
            logger.debug("[STTProxy] stop speech to text")
            self.memory.stop()
            self.recorder.stop_record()
            self.recognize_stream.stop()
            #追加分---------------

            if datetime.now() > self.datetime + timedelta(minutes=50):
                logger.debug("50 mintues over")
                token = self.get_token(self.watson)
                self.datetime = datetime.now()
                self.recognize_stream = self.watson.recognize_stream(token)
            #---------------------

    def _on_stream_open(self, stream):
        logger.debug("[STTProxy] on stream open")
        self.recorder.start_record(self._record_process)

    def _on_stream_close(self, stream):
        logger.debug("[STTProxy] on stream close")
        if self.memory.status != "stop":
            self.stop()

    def _on_stream_error(self, stream, error):
        logger.debug("[STTProxy] on stream error {0}".format(error))
        self.memory.error(str(error))

    def _on_stream_message(self, stream, message):
        if self.memory.status != "running":
            return
        d = json.loads(message)
        if not d or not d["results"] or len(d["results"]) == 0 or not d["results"][0]["final"]:
            return
        words = [[x["transcript"].encode('utf-8'), x["confidence"]] for x in d["results"][0]["alternatives"]
                 if float(x["confidence"]) >= self.confidence]
        if len(words) > 0:
            logger.debug("[STTProxy] on stream message: ")
            for word in words:
                logger.debug(str(word[0]) + ", " + str(word[1]))
            self.memory.recognize(words)

    def _record_process(self, inputChannels, inputSamples, timeStamp, inputBuff):
        self.recognize_stream.send(inputBuff, is_binary=True)

    def _on_received_status(self, key, value, message):
        logger.debug("[Memory] received: {0} {1} {2}".format(key, value, message))
        if value == "running" and self.memory.status != "running":
            self.start()
        elif value == "stop" and self.memory.status != "stop":
            self.stop()

    def get_token(self, watson):
        logger.debug("【get_token】")
        r = watson.get_token()
        if r.status_code != 200:
            logger.info(r.url)
            logger.info(r.status_code)
            logger.info(r.text.encode('utf-8'))
            logger.debug("【get_token_false】")
            exit(1)

        return r.text
