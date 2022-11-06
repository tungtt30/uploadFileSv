const SongController = require('../controller/songController')
const express = require('express');
const router = express.Router();
const path = require('path')

//------------------------ 
const multer = require('multer')
// var upload = multer({ dest: 'upload/' });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/upload/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })


// -------------------


var type = upload.fields([{ name: 'song', maxCount: 1 }, { name: 'image', maxCount: 1 }])


router.get('/', SongController.getAll)
router.get('/form', SongController.form)
router.get('/getOne', SongController.getOne)
router.get('/deleteTest', SongController.deleteTest)

router.post('/post', type, SongController.postSong)

router.put('/update', SongController.updateSong)
router.delete('/delete', SongController.deleteSong)





module.exports = router