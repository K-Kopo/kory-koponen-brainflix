const express = require('express');
const router = express.Router();

router.get('/videos', (req,res)=>{
    return res.status(200).json('./data/videos.json');
});

modules.export = router 