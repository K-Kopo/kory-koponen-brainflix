const express = require('express');
const app = express();
const videoRoute = require('./routes/videos')
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(express.static('public'))
app.use('/', videoRoute);

app.listen(8080,()=>{
    console.log("we're listening...");
});