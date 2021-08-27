import React from "react";
import "./videoplayer.scss";



const Videoplayer = ({video}) => {

  return (
    <>
    
      <div className="video">
        <video className="video__poster" poster={video.image} controls width={"100%"}></video>

      </div>
    </>
  );
};

export default Videoplayer;
