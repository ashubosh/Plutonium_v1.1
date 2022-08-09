const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);



app.get("/sol1", function (req, res) {
   let arr = [1,2,3,5,6,7]
    let total = 0
    for (var i in arr){
        total = total + arr[i]
    }
    let lastDigit = arr.pop()
    let finalSum = lastDigit * (lastDigit + 1)/2
    let missingNumber = finalSum - total
    res.send( {data: missingNumber} )


})

app.get("/sol2", function (req, res) {
    let arr= [33, 34, 35, 37, 38]
    let ArrSum = 0
    let len= arr.length
    for (var i in arr){
        ArrSum = ArrSum + arr[i]
    }
    //console.log(len)
    let firstDigit = arr[0]
    let lastDigit = arr.pop()
    let finalSum = [(len + 1) * (firstDigit + lastDigit)]/2
    let missingNumber = finalSum - ArrSum
    res.send( {data: missingNumber} )
})


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

