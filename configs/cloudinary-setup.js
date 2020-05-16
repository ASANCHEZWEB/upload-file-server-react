const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.cloudName,
  api_key: process.env.cloudKey,
  api_secret: process.env.cloudSecret
});

var storage = cloudinaryStorage({
  cloudinary,
  folder: 'thing-gallery', // el nombre de la coleccion en cloudinary
  allowedFormats: ['jpg', 'png'],
  // params: { resource_type: 'raw' }, => en el caso de subir otro tipo de archivo
  filename: function (req, res, cb) {
    cb(null, res.originalname); // el noombre en cloudinary tendrá el mismo nombre que el archivo
  }
});

const uploader = multer({ storage });
module.exports = uploader;