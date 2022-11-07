

const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage")
const Song = require('../model/Song')




class SongController {


    async getAll(req, res) {
        try {
            const data = await Song.find()
            res.json({
                status: 'ok',
                data
            })
        } catch (error) {
            res.json({
                status: 'error'
            })
        }
    }

    getOne(req, res) {
        res.send('get one')
    }

    form(req, res) {
        res.sendFile(__dirname + '/index.html');
    }

    async postSong(req, res) {
        var datetimestamp = Date.now();
        try {
            const storage = getStorage();
            const dataImage = req.files.image[0] // file data
            const dataSong = req.files.song[0]

            if (dataImage.mimetype == 'image/jpg' || dataImage.mimetype == 'image/jpeg' || dataImage.mimetype == 'image/png') {
                if (dataSong.mimetype == 'audio/mpeg' || dataSong.mimetype == 'audio/x-m4a') {
                    const fileName = req.body.name + datetimestamp
                    const imageRef = ref(storage, `image/${fileName}.jpg`);
                    const songRef = ref(storage, `song/${fileName}.mp3`);
                    const name = req.body.name
                    const singer = req.body.singer

                    await uploadBytes(imageRef, dataImage.buffer, 'base64')
                    await uploadBytes(songRef, dataSong.buffer, 'base64')
                    const imageURL = await getDownloadURL(imageRef)
                    const songURL = await getDownloadURL(songRef)
                    const songRepo = new Song({
                        name,
                        singer,
                        imageUrl: imageURL,
                        songUrl: songURL
                    })
                    await songRepo.save()
                    res.redirect('/api/song')
                }
                else { res.json({ staus: 'false', message: "error audio file upload or file format, support mp3 and m4a", data: { name: '', singer: '', image: '', song: '' } }) }
            } else {
                res.json({ staus: 'false', message: "error audio file upload or file format, support mp3 and m4a", data: { name: '', singer: '', image: '', song: '' } })
            }
        } catch (error) {
            res.json({ status: 'error', message: 'bad request' })
        }
    }



    updateSong(req, res) {
        res.send('update')
    }

    deleteSong(req, res) {
        res.send('delete')
    }

}
module.exports = new SongController