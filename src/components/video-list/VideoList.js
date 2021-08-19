import videoData from '../../data/videos.json'
import React from 'react';

class VideoList extends React.Component {
    

    state = {
        videos: videoData,
        currentVideoId: videoData[0],
    }
    render () {
    return (
      <div className="video">
        {this.state.videos.map(video => {
            return <section>
                <video src={`${video.video}/?api_key=07b921d3-0e1f-4039-ad7e-f4bce269c942`}/>
                <h1>{video.title}</h1>
                <h3>{`By: ${video.channel}`}</h3>
                <h3>{video.timestamp}</h3>
                <h4>{video.views}</h4>
                <h4>{video.likes}</h4>
                <p>{video.description}</p>
            </section> 
            

        })}
      </div>  
    );
}
};

export default VideoList;