var ffmpeg = require('ffmpeg');
var fs = require('fs');
var yt = require('yt-dlp-wrap').default;

function extractMP3(input, output) {
    
    try {
        var processo = new ffmpeg(input);
    processo.then(function (video) {
        video.fnExtractSoundToMP3(output), function (error, file) {
            if(!error) {
                console.log('audio extraido com sucesso' + file);
            }
        }
    });
    } catch (error) {
        console.error("Deu ruim", error);
    }
    
    return [input, output];
}

// function downloadMP4(url, name) {
//     const download = new yt()
// }

module.exports = extractMP3;