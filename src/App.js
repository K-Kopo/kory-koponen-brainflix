import React from 'react';
import Header from './components/header/Header';
import videoData from './data/video-details.json';
import VideoList from './components/video-list/VideoList';
import Video from './components/videoplayer/Video';
import nextVideoData from './data/videos.json';

class App extends React.Component {
  state = {
    videos: videoData,
    currentVideo: videoData[0],
    nextVideos: nextVideoData
}
  render ()
  {
  return (
    <>
    <Header />
    <Video video={this.state.currentVideo}/>
    <VideoList nextVideo={this.state.nextVideos}/>
    </>
  );
}
}

export default App;
