const express = require ('express')
const path = require('path');

const app = express()
const port = process.env.port || 5052

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/auth.html'));
  });

app.listen(port,() => console.log('server ready'))