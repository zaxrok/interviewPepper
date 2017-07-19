/**
 * YUV422フォーマットの画像をcanvasに描画する処理
 */

var YUV422;
var t = [];
for ( var i = 0; i < 1024; ++i) {
    t[String.fromCharCode(i)] = i;
}

YUV422 = {
    /*
     * YUVをRGB+Aに変換する
     * A（透明度）は常時0xFF（透過なし）にする
     */
    YUV_to_RGBA: function (y, u, v) {
        var r = y + 1.402 * (v - 128);
        var g = y - 0.34414 * (u - 128) - 0.71414 * (v - 128);
        var b = y + 1.772 * (u - 128);
        return [r, g, b, 0xFF];
    },

    draw: function(canvas, data, width, height, color) {
        var context = canvas.getContext('2d');
        if (!context) { return; }

        var image = context.createImageData(width, height);
        var imageData = image.data;
        var data_ptr = 0;
        var image_ptr = 0;
        var read = 0;
        if(color == 9) {
            for (var y = 0; y < height; y++) {
            // YUV422は4バイトで2ピクセルを表現する形式なので、X方向は2ドットずつ飛ぶ
                for (var x = 0; x < width; x += 2, data_ptr += 4, image_ptr += 8) {
                    var y1 = data.charCodeAt(data_ptr);
                    var u = data.charCodeAt(data_ptr+1);
                    var y2 = data.charCodeAt(data_ptr+2);
                    var v = data.charCodeAt(data_ptr+3);

                    var rgb1 = this.YUV_to_RGBA(y1, u, v);
                    var rgb2 = this.YUV_to_RGBA(y2, u, v);

                    // 2ドット分のRGBAを入れた配列 (= 8bytes)
                    var rgb = rgb1.concat(rgb2);

                    Array.prototype.splice.apply(imageData, [image_ptr, 8].concat(rgb))
                }
            }
        } else {
            for(var y = 0; y < height; y++) {
                for(var x = 0; x < width; x++) {
                    var writep = (width * y + (width - x - 1)) * 4;
                    var luminosity = t[data[read++]];
                    var lum_01 = luminosity/255;
                    lum_01 = 1.0 - (1.0 - lum_01) * (1.0 - lum_01);
                    luminosity = Math.floor(256 * lum_01);
                    imageData[writep+0] = luminosity;
                    imageData[writep+1] = luminosity;
                    imageData[writep+2] = luminosity;
                    imageData[writep+3] = 255; //alpha
                }
            }
        }
        context.putImageData(image, 0, 0);
    }
};
