'use strict'
import * as os from 'os';
import * as process from 'process';
import * as mongoose from 'mongoose';

//countConnect
const countConnect = (): void => {
    const numConnection: number = mongoose.connections.length;
    console.log(`Number of connections: ${numConnection}`);
}

// check overload
const checkOverload = (intervalSeconds: number): void => {
    setInterval(() => {
        const numConnection: number = mongoose.connections.length;
        const numCores: number = os.cpus().length;
        const memoryUsage: number = process.memoryUsage().rss;

        // example 
        const maxConnections: number = numCores * 5;

        console.log(`Active connections: ${numConnection}`);
        console.log(`Memory usage: ${(memoryUsage / 1024 / 1024)} MB`);
        
        if (numConnection > maxConnections) {
            console.log(`Connection overload detected!`);
            // notify.send(...)
        }
    }, intervalSeconds * 1000); 
}

export { countConnect, checkOverload };
