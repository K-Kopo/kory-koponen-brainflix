const express = require('express');
const app = express();
const videoRoute = require('./routes/videos')



app.use('/', videoRoute);

app.listen(8080,()=>{
    console.log("we're listening...");
});