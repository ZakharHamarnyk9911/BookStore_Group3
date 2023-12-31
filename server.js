import express from "express";
import mongoose from "mongoose";
import config from './config/config.js'
import app from './server/express.js'
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri )


mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`) 
  })
  app.listen(config.port, (err) => { 
  if (err) {
  console.log(err) 
  }
  console.info('Server started on port %s', config.port+'\n'+  'http://localhost:3000/') 
  
  })