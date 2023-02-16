const express = require ('express')
const path = require('path');

const app = express()
const port = process.env.port || 5052

app.get('/',(req,res) => res.send('Hello World!'))
app.listen(port,() => console.log('server ready'))