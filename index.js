const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/key');

mongoose.connect(config.mongoURI,
    {useNewUrlParser: false}) // to remove deprecation alert from mongoose 
    .then(()=> console.log('DB connected'))
    .catch(err => console.log(err));

    
const port = process.env.PORT || 5000
app.listen(port);

app.get('/', (req,res)=>{
    res.send('hello')
});

