(function () {
    var memoryPath = {sttproxy: {recognized: 'Bluemix/STTProxy/WordRecognized'}},
        dom = {
            words: document.getElementById('words'),
            confidence: document.getElementById('confidence')
        };

    QiSession(function (session) {
        // done
        session.service('ALMemory').then(function (almemory) {
            var path = memoryPath.sttproxy.recognized;
            almemory.subscriber(path).then(function (subscriber) {
                subscriber.signal.connect(onWordRecognized);
                output('(ready)');
            }, function () {
                console.error('cannot to subscribe ' + path);
                output('(error: cannot to subscribe ' + path + ')');
            });
        })
    }, onDisconnected);

    function onDisconnected() {
        console.log('qisession was disconnected');
        output('(qisession was disconnected)');
    }

    function onWordRecognized(values) {
        if (values.length > 0) {
            output(values[0][0]);
            QiSession(function (session){
              session.service('ALMemory').then(function (memory){
                memory.raiseEvent('TabletEvent/WordRecognized', values[0][0]);
              });
            });
            outputConfidence(values[0][1]);
        } else {
            output('(null)');
            outputConfidence('');
        }
    }
    // タブレットに認識した文字を出力
    function output(text) {
        dom.words.innerText = text;
    }

    // タブレットに認識した閾値を出力
    function outputConfidence(value) {
        dom.confidence.innerText = value;
    }

}());
