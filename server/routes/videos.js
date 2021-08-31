const { Router } = require('express');
const express = require('express');
const app = express();
const router = Router.express();

app.get('/videos', (req,res)=>{
    res.status(200).json()
})