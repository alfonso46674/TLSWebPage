const express = require("express")
const https = require('https')
const fs = require('fs')

const port = 8080;

const app = express();


app.get('/',(req,res)=>{
  res.send("Hello world")
});

const httpsServer = https.createServer({
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
}, app);

httpsServer.listen(port, ()=>{
  console.log("HTTPS server running on port 8080");
})

