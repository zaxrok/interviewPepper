# -*- coding: utf-8 -*-

u"""
see readme.md
"""

import os
import sys
import time

import socket
import fcntl
import struct

from datetime import datetime,timedelta

from naoqi import ALBroker
from naoqi import ALProxy

sys.path.append(os.path.dirname(os.path.abspath(__file__)) + '/../../')
from qibluemix import STTProxy, get_logger
from qibluemix.pepper import SpeechRecognitionMemory, StreamingAudioRecorder
from qibluemix.watson import Watson

logger = get_logger()



# ==== parameters ====

PEPPER_IP = "172.16.42.16"
PEPPER_PORT = 9559
EVENT_ROOT_NAME = "Bluemix/STTProxy/"  # 本アプリが使用するPepperのメモリのルートパス
USERNAME = "b80aa184-36d2-43e1-8779-9e80a82e4ab3"  # credentials.username (Bluemix Speech To Text)
PASSWORD = "3fuHw6rdkGKS"  # credentials.password (Bluemix Speech To Text)
URL = "https://stream.watsonplatform.net/speech-to-text/api"
CONFIDENCE = 0.2  # 変換における信頼性の許容値(0.0~1.0) 許容値未満の変換結果は無視される
# ==== /parameters ====

StreamingAudioRecorderModule = None
SpeechRecognitionMemoryModule = None
broker = None
#logger = get_logger()

def main():
    global SpeechRecognitionMemoryModule
    global StreamingAudioRecorderModule
    global broker

    logger.info("init watson")
    watson = Watson(USERNAME, PASSWORD, URL)

    # token = get_token(watson)
    # stream = watson.recognize_stream(token)

    # tokenLimit = datetime.now() + timedelta(minutes=50)

    logger.info("init remote pepper")
    broker = ALBroker("myBroker", "0.0.0.0", 0, PEPPER_IP, PEPPER_PORT)

    logger.info("init StreamingAudioRecorder")
    recorder = StreamingAudioRecorderModule = StreamingAudioRecorder("StreamingAudioRecorderModule")

    logger.info("init SpeechRecognitionMemory")
    memory = SpeechRecognitionMemoryModule = SpeechRecognitionMemory("SpeechRecognitionMemoryModule", EVENT_ROOT_NAME)

    logger.info("init SpeechToTextProxy")
    proxy = STTProxy(recorder, watson, memory)
    proxy.init()

    logger.info("ready...")

    # manual(proxy, duration=10, after_wait=3)

    # service


    while True:
        # if tokenLimit < datetime.now():
        #     token = get_token(watson)
        #     stream = watson.recognize_stream(token)
        #     proxy = STTProxy(recorder, watson, memory)
        #     proxy.init()
        #
        #     tokenLimit = datetime.now() + timedelta(minutes=50)
        #
        #     logger.info("proxyInit")

        time.sleep(1)

        # key = ord(getch())
        # if key == 27:
        #     break

def manual(proxy, duration=10, after_wait=3):
    logger.info("start")
    proxy.start()

    time.sleep(duration)

    logger.info("stop")
    proxy.stop()

    time.sleep(after_wait)
    logger.info("end")


def get_token(watson):
    r = watson.get_token()
    if r.status_code != 200:
        logger.info(r.url)
        logger.info(r.status_code)
        logger.info(r.text.encode('utf-8'))
        exit(1)

    return r.text


if __name__ == "__main__":
    main()
