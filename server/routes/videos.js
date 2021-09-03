const express = require('express');
const router = express.Router();
const fs = require('fs');
const videoPath = ('./data/videos.json');

const dataContent = fs.readFileSync(videoPath);
const parsedDataContent = JSON.parse(dataContent);

const getVideos = () => {
    
    return parsedDataContent;
  }

const getVideoId = (id)=> {
      
      const singleVideo = parsedDataContent.find(content => content.id === id)  
      return singleVideo;
}

router.get('/videos/:id', (req, res)=>{
    if (!req.params.id) {
      res.status(404).send("no video with that id found")
    }
    const eachVideo = getVideoId(req.params.id);
    return res.status(200).json(eachVideo);
})
router.get('/videos', (req,res)=>{
    const allVideos = getVideos();
    return res.status(200).json(allVideos);
});

module.exports = router 