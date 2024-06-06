const express = require('express')
const compression =require('compression')
const morgan = require('morgan')
const {default: helmet} = require('helmet')
const app = express();


// init middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())

// init db


// app routes
app.get('/', (req, res, next) => {
    const strCompress = 'hello fantipjs'
    return res.status(200).json({
       message: 'Welcome Fantipjs!', 
       metadata: strCompress.repeat(10000)
    })
})
module.exports = app