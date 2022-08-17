const express = require("express");
const router = express.Router();
const Controller = require('../controllers/controller')

router.get('/test', function(req, res){
  res.send("my first api")
})

router.post('/createBook', Controller.createBook)

router.post('/createAuthor', Controller.createAuthor)

router.get('/bookByChetan', Controller.bookByChetan)

router.post('/priceUpdate', Controller.priceUpdate)





module.exports = router;