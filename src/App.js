import React from 'react';
import Header from './components/header/Header';
import videoData from './data/video-details.json'
import VideoList from './components/video-list/VideoList';
import Video from './components/videoplayer/Video'

class App extends React.Component {
  state = {
    videos: videoData,
    currentVideo: videoData[0],
}
  render ()
  {
  return (
    <>
    <Header />
    <Video video={this.state.currentVideo}/>
    {/* <VideoList /> */}
    </>
  );
}
}

export default App;
