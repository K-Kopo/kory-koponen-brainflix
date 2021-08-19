import React from 'react';
import videoData from '../../data/video-details.json'
import VideoList from '../video-list/VideoList';

class Video extends React.Component {
    

    state = {
        videos: videoData,
        currentVideoId: videoData[0],
    }
    render () {
    return (
      <div className="video">
        {this.state.videos.map(video => {
              
                <div>
                
                <h1>{video.title}</h1>
                <h3>{`By: ${video.channel}`}</h3>
                <h3>{video.timestamp}</h3>
                <h4>{video.views}</h4>
                <h4>{video.likes}</h4>
                <p>{video.description}</p> 
               </div>
                })}
    
            
      </div>  
    )};
}
;

export default Video;