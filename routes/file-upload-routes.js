const express = require('express');
const router  = express.Router();

// importamos la config de cloudinary importante
const uploader = require('../configs/cloudinary-setup');

router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
    // console.log('file is: ', req.file)
//la foto se guarda como clave imageUrl , se sube la foto al cloudninary 
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }
    //se guarda la url como secure_url para recibirla en front
    res.json({ secure_url: req.file.secure_url });
})

module.exports = router;