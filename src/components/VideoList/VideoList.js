import React from 'react';
import "./videolist.scss";
import { Link } from 'react-router-dom';

const VideoList = ({video}) => {
  return (
    <div className="next-video">
      <h4 className="next-video__title">NEXT VIDEO</h4>
      {video.map(video => 
      <Link  className="next-video__link" key={video.id} to={`/${video.id}`}>
      <div  className="next-video__box" >
      
      
      {/* // onClick={()=>props.handleClick(next.id)}> */}
        <img className = "next-video__box--img" src={video.image} alt="link associated"/>
        <div className="next-video__box--text">
        <h4 className="next-video__box--title">{video.title}</h4>
        <h5 className="next-video__box--author">{video.channel}</h5>
        </div>
        
      </div>
      </Link>)}
    </div>
      
  );
};

export default VideoList;