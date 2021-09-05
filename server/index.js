const express = require('express');
const app = express();
const videoRoute = require('./routes/videos')
const cors = require('cors')

require("dotenv").config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json())
app.use(express.static('public'))
app.use('/', videoRoute);

app.listen(PORT,()=>{
    console.log("we're listening...");
});