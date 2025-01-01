const express = require('express');
const app = express()
const mongoose = require('mongoose')
const seedDB = require('./seed')
const quoteRoutes = require('./apis/quoteRoutes')


app.use(express.urlencoded({ extended: true }))

mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{console.log('DB Connection established')})
.catch((err)=>{console.log(err)})

app.get('/hello',(req, res)=>{
    res.status(200).json({msg:"Hello from quoteapp"})
})
app.use(quoteRoutes)
// seedDB();
app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})