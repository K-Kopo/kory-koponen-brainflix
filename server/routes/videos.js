const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const videoPath = "./data/videos.json";
const videoContent = fs.readFileSync(videoPath);
const parsedVideoContent = JSON.parse(videoContent);

const readVideoFile = () => {
  const videoContent = fs.readFileSync(videoPath);
  const parsedVideoContent = JSON.parse(videoContent);
  return parsedVideoContent;
};

const getVideos = () => {
  return parsedVideoContent;
};

const getVideoId = (id) => {
  const singleVideo = parsedVideoContent.find((content) => content.id === id);
  return singleVideo;
};

router.get("/videos/:id", (req, res) => {
  if (req.params.id.length < 11) {
    res.status(404).send("no video with that id found");
  }
  const eachVideo = getVideoId(req.params.id);
  return res.status(200).json(eachVideo);
});
router.get("/videos", (req, res) => {
  const allVideos = getVideos();
  return res.status(200).json(allVideos);
});

router.post("/videos", (req, res) => {
  const postVideo = {
    id: uuidv4(),
    title: req.body.title,
    description: req.body.description,
    channel: "old man rivers",
    timestamp: new Date(),
    image: "http://localhost:8080/images/pass_butter.jpeg",
    comments: [{
      name: 'Brooding Teenager',
      comment: "Hell is other people. Do or do not, there is not try. Early bird gets the rotten worm. The Bees Knees are still overrated.",
  }]};
  console.log(postVideo);
  const newVideo = readVideoFile();
  newVideo.push(postVideo);
  fs.writeFileSync(videoPath, JSON.stringify(newVideo));

  return res.status(201).json(newVideo);
});

module.exports = router;
