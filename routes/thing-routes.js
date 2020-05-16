const express = require('express');
const router  = express.Router();

// incluimos el modelo:
const Thing = require('../models/thing-model');

router.get('/things', (req, res, next) => {
    //recoge todos los documentos de db con las url 
    Thing.find()
    .then(thingsFromDB => {
        res.status(200).json(thingsFromDB)
    })
    .catch(err => next(err))
})

router.post('/things/create', (req, res, next) => {
    //guarda en la db un documento del modelo Thing con la url de la imagen subida
    Thing.create(req.body)
    .then( aNewThing => {
        //responde en el front con un json con los datos del documento creado en db.
        res.status(200).json(aNewThing);
    })
    .catch( err => next(err) )
})

module.exports = router;
