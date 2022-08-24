
const moment = require('moment')
const mid1 = function (req , res , next ){

    console.log ("inside GLOBAL MW");
    console.log(moment().format('HH:mm:ss'))
    console.log(req.ip)
    console.log(req.originalUrl)
    next()
}


module.exports.MID1 = mid1

