const express = require('express');
const mongoose = require('mongoose');
const url='mongodb://localhost/CourseDBex'
const app=express();
mongoose.connect(url,{useNewUrlParser:true})
const con= mongoose.connection
con.on('open',()=>{
    console.log('connected...')
})
app.use(express.json())
const alienRouter = require('./routes/courses')
app.use('/courses',alienRouter)
app.listen(9099,()=>{
    console.log('server is started');
});
