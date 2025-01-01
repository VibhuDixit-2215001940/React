const express = require('express');
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log('DB Connection established')})
.catch((err)=>{console.log(err)})

app.get('/hello',(req, res)=>{
    res.status(200).json({msg:"Hello from quoteapp"})
})

app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})