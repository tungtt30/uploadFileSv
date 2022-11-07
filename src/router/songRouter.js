const SongController = require('../controller/songController')
const express = require('express');
const router = express.Router();


//------------------------ 
const multer = require('multer')
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


// -------------------


var type = upload.fields([{ name: 'song', maxCount: 1 }, { name: 'image', maxCount: 1 }])


router.get('/', SongController.getAll)
router.get('/form', SongController.form)
router.get('/getOne', SongController.getOne)
router.post('/post', type, SongController.postSong)
router.put('/update', SongController.updateSong)
router.delete('/delete', SongController.deleteSong)





module.exports = router