/**
 * カメラまわり
 */

 $(function(){
    // Image format
    var k960p = 3;                // 1280*960
    var k4VGA = 3;                // 1280*960
    var kVGA = 2;                 // 640*480
    var kQVGA = 1;                // 320*240
    var kQQVGA = 0;               // 160*120

    // Color Space
    var kYuvColorSpace = 0; //monokuro
    var kyUvColorSpace = 1;
    var kyuVColorSpace = 2;
    var kRgbColorSpace = 3;
    var krGbColorSpace = 4;
    var krgBColorSpace = 5;
    var kHsvColorSpace = 6;
    var khSvColorSpace = 7;
    var khsVColorSpace = 8;
    var kYUV422InterlacedColorSpace = 9;  //deprecated
    var kYUV422ColorSpace = 9;
    var kYUVColorSpace = 10;
    var kRGBColorSpace = 11;
    var kHSVColorSpace = 12;
    var kBGRColorSpace = 13;
    var kYYCbCrColorSpace = 14;
    var kH2RGBColorSpace = 15;
    var kHSMixedColorSpace = 16;

    var ID = 'barcode';
    var FPS = 30; //(1 ~ 30程度？)
    var color = 0; //カラー変更(0(モノクロ) or 9(カラー))
    var format = 1; //画像フォーマット変更(0 ~ 3)
    var canvas = document.getElementById('camera');
    
    var enablePlay = true;
    var timer;
    var g_handle;
    var g_videoDevice;

    var subscribedList = [];
    
    $.subscribeToALMemoryEvent("startPreview", function (data) {
        console.log("start");
        startPreview();
        setTimeout(function() {
          $("#preview_canvas").css("visibility", "visible");
      }, 2000);
    });
    
    $.subscribeToALMemoryEvent("stopPreview", function (data) {
        console.log("stop");
        stopPreview();
        //$('#shutter').toggleClass("shutter_anim");
        //$('#preview_canvas').toggleClass("hide_anim");
    });
    
    $.subscribeToALMemoryEvent("hidePreview", function (data) {
        console.log("hide");
        //$('#shutter').toggleClass("shutter_anim");
        //$('#preview_canvas').toggleClass("hide_anim");
        hidePreview();
    });
    
    function stopPreview() {
        enablePlay = false;
        clearTimeout(timer);
        unsubscribeCamera(g_videoDevice, g_handle);
    }
    
    function hidePreview() {
        $("#preview_canvas").css("visibility", "hidden");
        var context = canvas.getContext('2d');
        context.clearRect(0,0,canvas.width,canvas.height);
        
    }

    function unsubscribeCamera (videoDevice, handle) {
        if (handle) {
            videoDevice.unsubscribe(handle).then(function () {
                console.log('UNsubscribed camera');
                handle = null;
                $.raiseALMemoryEvent('cameraUnsubscribed', '');
            }, $.onQimError);
        }
    }

    function updateImage(videoDevice, handle) {
        if(!enablePlay)return;
        //log('on updateImage');
        videoDevice.getImageRemote(handle).then(function (image) {
            //log('on getImageRemote')
            if (image) {
                var width = image[0];
                var height = image[1];
                YUV422.draw(canvas, atob(image[6]), width, height, color);
                videoDevice.releaseImage(handle).then(function () {
                    timer = setTimeout(updateImage(videoDevice, handle), (1000 / FPS));
                }, $.onQimError);
            }else{
                $.raiseALMemoryEvent('cannotupdateImage', '');
            }
        }, $.onQimError);
    }

    var subscribed = 0
    function startPreview() {
        enablePlay = true;
        // if (subscribed == 2){
        //     return;
        // }
        // subscribed = 2;

        console.log('play');
        $.getService('ALVideoDevice', function (videoDevice) {
            console.log('got ALVideoDevice');
            videoDevice.getSubscribers().then(function(list){
                subscribedList = list;
                for (var i = 0; i < subscribedList.length; i++){
                    var name = subscribedList[i];
                    if (name.indexOf(ID) !== -1){
                        videoDevice.unsubscribe(name);
                    }
                }

                videoDevice.subscribeCamera(ID, 0, format, color, FPS).then(function (handle) {

                    // サブスクライブできる量に制限があるため、サブスクライブする前に残っているものをアンサブスクライブする   
                    if (handle === undefined || handle.toString() == ''){
                        for (var i = 0; i < subscribedList.length; i++){
                            var name = subscribedList[i];
                            if (name.indexOf(ID) !== -1){
                                videoDevice.unsubscribe(name);
                            }
                        }
                        startPreview();

                    }else{
                        console.log('subscribed camera')
                        $.raiseALMemoryEvent('cameraSubscribed', '');
                        g_handle = handle;
                        g_videoDevice = videoDevice;

                        $.subscribeToALMemoryEvent('cameraDone', function(){
                            unsubscribeCamera(videoDevice, handle);
                            $.raiseALMemoryEvent('cameraUnsubscribed', '');
                        });

                        setTimeout(function(){updateImage(videoDevice, handle)}, 0);
                    }

                }, $.onQimError);

            }, function(){
                videoDevice.subscribeCamera(ID, 0, format, color, FPS).then(function (handle) {

                    // サブスクライブできる量に制限があるため、サブスクライブする前に残っているものをアンサブスクライブする   
                    if (handle === undefined || handle.toString() == ''){
                        for (var i = 0; i < subscribedList.length; i++){
                            var name = subscribedList[i];
                            if (name.indexOf(ID) !== -1){
                                videoDevice.unsubscribe(name);
                            }
                        }
                        startPreview();

                    }else{
                        console.log('subscribed camera')
                        $.raiseALMemoryEvent('cameraSubscribed', '');
                        g_handle = handle;
                        g_videoDevice = videoDevice;

                        $.subscribeToALMemoryEvent('cameraDone', function(){
                            unsubscribeCamera(videoDevice, handle);
                            $.raiseALMemoryEvent('cameraUnsubscribed', '');
                        });

                        setTimeout(function(){updateImage(videoDevice, handle)}, 0);
                    }

                }, $.onQimError);
            });
        });
}
});
