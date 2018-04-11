//This is server.js file for production build on Local
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression'; //It is used to compress app files while sending over n/w using gzip compression

/* eslint-disable no-console */

const port = 8080;
const app = express();

app.use(compression());
app.use(express.static('dist')); //Allowing express to serve static files from dist folder

app.get('/',function(req,res){
  res.sendfile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port,function(err){
  if(err){
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
