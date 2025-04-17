var ffmpeg = require('ffmpeg');
var yt = require('yt-dlp-wrap').default;
var juggernaut = new yt('C:/ytdlp/binaries/yt-dlp.exe');
// import ytdlp from 'node-ytdlp-wrap';
var fs = require('fs');

function extractMP3(input, output) {
    
    try {
        var processo = new ffmpeg(input);
    processo.then(function (video) {
        video.fnExtractSoundToMP3(output), function (error, file) {
            if(!error) {
                console.log('Audio extracted successfully :D' + file);
            }
        }
    });
    } catch (error) {
        console.error("An error occurred D:", error);
    }
    
    return [input, output];
}

function downloadMP4(url, nome) {
    try {
    
        let sla = juggernaut.exec([
        url,
        '-f',
        'best',
        '-o',
        nome,
    ])
    
    .on('progress', (progress) =>
        console.log(
            progress.percent,
            progress.totalSize,
            progress.currentSpeed,
            progress.eta
        )
    )
     .on('ytDlpEvent', (eventType, eventData) =>
        console.log(eventType, eventData)
     )
    .on('error', (error) => console.error(error))
    .on('close', () => console.log('Finished...'))

    console.log(ytDlpEventEmitter.ytDlpProcess.pid)

} catch(error) {
    console.log(error);
}
return [url, nome];
}
exports.extractMP3 = extractMP3;
exports.downloadMP4 = downloadMP4;
module.exports = {
    extractMP3,
    downloadMP4,
};
