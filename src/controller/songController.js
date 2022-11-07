

const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage")
const song = require('../model/Song')




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

    async postSong(req, res) {
        try {
            const storage = getStorage();

            const dataImage = req.files.image[0].buffer
            const dataSong = req.files.song[0].buffer

            const fileName = req.body.name

            const imageRef = ref(storage, `image/${fileName}.jpg`);
            const songRef = ref(storage, `song/${fileName}.mp3`);

            await uploadBytes(imageRef, dataImage, 'base64')
            await uploadBytes(songRef, dataSong, 'base64')
            const imageURL = await getDownloadURL(imageRef)
            const songURL = await getDownloadURL(songRef)


            res.json({
                status: 'ok',
                name: fileName,
                image: imageURL,
                song: songURL
            })

        } catch (error) {
            res.json({ status: 'error' })
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