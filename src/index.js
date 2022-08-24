const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const GlobalMiddleware = require('./middlewares/globalMiddleware')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use (GlobalMiddleware.globalMiddleware);


mongoose.connect("mongodb+srv://Ashutosh1504:jcv5sjFrfdkxeEyL@cluster0.aqhdgzq.mongodb.net/AshutoshSingh1504?retryWrites=true&w=majority"
,{
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
