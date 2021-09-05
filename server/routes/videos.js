const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const videoPath = "./data/videos.json";
const videoContent = fs.readFileSync(videoPath);
const parsedVideoContent = JSON.parse(videoContent);

const options = { year: "numeric", month: "numeric", day: "numeric" };

function dateConvert (date) {new Date(Number(date)).toLocaleString(
  "en-US",
  options
)}

const readVideoFile = () => {
  return parsedVideoContent;
};

const getVideos = () => {
  return readVideoFile();
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
    timestamp: new Date(Number()).toLocaleString(
      "en-US",
      options
    ),
    image: "http://localhost:8080/images/pass_butter.jpeg",
    comments: [{
      name: 'James Joyce',
      comment: "“I was a Flower of the mountain yes when I put the rose in my hair like the Andalusian girls used or shall I wear a red yes and how he kissed me under the Moorish wall and I thought well as well him as another and then I asked him with my eyes to ask again yes and then he asked me would I yes to say yes my mountain flower and first I put my arms around him yes and drew him down to me so he could feel my breasts all perfume yes and his heart was going like mad and yes I said yes I will Yes.”"

  },{
    name: 'David Foster Wallace',
    comment: "Fiction is one of the few experiences where loneliness can be both confronted and relieved. Drugs, movies where stuff blows up, loud parties -- all these chase away loneliness by making me forget my name's Dave and I live in a one-by-one box of bone no other party can penetrate or know. Fiction, poetry, music, really deep serious sex, and, in various ways, religion -- these are the places (for me) where loneliness is countenanced, stared down, transfigured, treated."
  },
{
  name: 'Rachel Cusk',
  comment: "As it happened, I was no longer interested in literature as a form of snobbery or even self-definition. I had no desire to prove that one book was better than another; in fact, if I read something I admired, I found myself increasingly disinclined to mention it at all. What I knew personally to be true had come to seem unrelated to the process of persuading others. I did not, any longer, want to persuade anyone of anything."
}]};
  console.log(postVideo);
  const newVideo = readVideoFile();
  newVideo.push(postVideo);
  fs.writeFileSync(videoPath, JSON.stringify(newVideo));

  return res.status(201).json(newVideo);
});

module.exports = router;
