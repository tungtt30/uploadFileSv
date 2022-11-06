
const fs = require('fs')



class SongController {


    getAll(req, res) {
        res.send('get all')
    }

    getOne(req, res) {
        res.send('get one')
    }

    form(req, res) {
        res.sendFile(__dirname + '/index.html');
    }

    postSong(req, res) {
        var filePathSong = __dirname.split('\\controller')[0] + '\\upload\\' + req.files['song'][0].filename
        var filePathImage = __dirname.split('\\controller')[0] + '\\upload\\' + req.files['image'][0].filename //file path

        console.log(filePathImage, filePathSong)
        res.sendFile(filePathImage)

    }

    deleteTest(req, res) {
        // fs.unlinkSync(filePath); //delete file
    }

    updateSong(req, res) {
        res.send('update')
    }

    deleteSong(req, res) {
        res.send('delete')
    }

}
module.exports = new SongController