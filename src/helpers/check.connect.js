'use strict'
const os = require('os')
const process = require('process')
const mongoose = require('mongoose')

//countConnect
const countConnect = () => {
    const numConnection = mongoose.connections.length
    console.log(`Number of connection::${numConnection}`)
}


// check over load
const checkOverload = () => {
    setInterval( () => {
    const numConnection = mongoose.connections.length
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // example 
    const maxConnections= numCores * 5;

    console.log(`Active connection:${numConnection}`)
    console.log(`memory usage:: ${memoryUsage / 1024 / 1024}`)
    if(numConnection > maxConnections){
        console.log(`connection overload deleted!`)
        //notify.send(...)
    }

    }, _SECONDS)
}
module.exports = {
    countConnect,
    checkOverload
}