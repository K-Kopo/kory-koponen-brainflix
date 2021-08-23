import React from 'react';
import Header from './components/Header/Header';
import videoData from './data/video-details.json';
import VideoList from './components/VideoList/VideoList';
import VideoDetails from "./components/VideoDetails/VideoDetails"
import Videoplayer from './components/Videoplayer/Videoplayer';
import nextVideoData from './data/videos.json';
import NewComments from './components/NewComments/NewComments';
import Comments from './components/Comments/Comments';
import "./App.scss";

class App extends React.Component {
  state = {
    videos: videoData,
    currentVideo: videoData[0],
    nextVideos: nextVideoData
}
changeVideo = (id) => {
  let newVideo = this.state.videos.find(video => video.id === id)
  console.log(newVideo);
  
  this.setState ({
    currentVideo: newVideo
  })
}
  render ()
  {
  return (
    <>
    <Header />
    <Videoplayer video={this.state.currentVideo}/>
    <div className="page-box">
      <div>
    <VideoDetails video={this.state.currentVideo}/>
    <NewComments video={this.state.currentVideo}/>
    <Comments video={this.state.currentVideo}/>
    </div>
    <VideoList 
    handleClick={this.changeVideo}
    nextVideo={this.state.nextVideos.filter(nextVideo=> nextVideo.id !== this.state.currentVideo.id)}/>
    </div>
    </>
  );
}
}

export default App;
