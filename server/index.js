const express = require('express');
const logger = require('morgan');
const app = express();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const config = require('./config/key');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const path = require('path');
require('dotenv').config({
    path: path.join(__dirname, './config/dev.env'),
});

app.use(logger('combined'));

// router
const authRouter = require('./routes/auth');
app.use('/api/auth/', authRouter);
const profileRouter = require('./routes/profile');
app.use('/api/profile', profileRouter);
const videoRouter = require('./routes/video');
app.use('/api/content', videoRouter);
const tagRouter = require('./routes/tags');
app.use('/api/tag', tagRouter);

// mongodb connection
mongoose.connect(config.mongoURI,
    {useNewUrlParser: true}) // to remove deprecation alert from mongoose 
    .then(()=> console.log('DB connected'))
    .catch(err => console.log(err));
    
// confirm localhost:5000  
app.get('/', (req,res)=>{
    res.send('hello')
});

const port = process.env.PORT || 5000
app.listen(port);
