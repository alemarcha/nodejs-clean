'use strict';

const express = require('express');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const router = require('./router');

if (cluster.isMaster) {

    console.log(`Master ${process.pid} is running`);
  
    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }
  
    cluster.on('exit', (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      cluster.fork(); // Create a New Worker, If Worker is Dead
    });
  
  } else {
  
    const app = express();
    router(app)
    
    app.listen(3000, function () {
        console.log('Example app listening on port 3000 as worker ' + cluster.worker.id + " running @ process " + cluster.worker.process.pid + "!");
      });
  
  }
