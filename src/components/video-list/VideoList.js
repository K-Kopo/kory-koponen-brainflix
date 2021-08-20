import React from 'react';

const VideoList = (props) => {
  return (
    <div className="next-video">
      <h4 className="next-video__title">NEXT VIDEO</h4>
      {props.nextVideo.map(next => 
      <div className="next-video__box" 
      key={next.id}
      onClick={()=>props.handleClick(next.id)}>
        <img className = "next-video__box--img" src={next.image}/>
        <div className="next-video__box--text">
        <h4 className="next-video__box--title">{next.title}</h4>
        <h5 className="next-video__box--author">{next.channel}</h5>
        </div>
      </div>)}
    </div>
      
  );
};

export default VideoList;