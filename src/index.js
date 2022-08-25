const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require('moment')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Ashutosh1504:jcv5sjFrfdkxeEyL@cluster0.aqhdgzq.mongodb.net/AshutoshSingh1504?retryWrites=true&w=majority"
,{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

/*app.use (
    function (req, res, next) {
        console.log ("inside GLOBAL MW");
        console.log (moment().format('HH:mm:ss'))
        console.log(req.ip)
        console.log(req.originalUrl)
        next();
  }
  ); */

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
