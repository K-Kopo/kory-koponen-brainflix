import React from "react";
import "./videoplayer.scss";



const Videoplayer = ({video}) => {
  if (!video) return <p>Loading...</p>;
  return (
    <>
    
      <div className="video">
        <video className="video__poster" poster={video.image} controls width={"100%"}></video>

      </div>
    </>
  );
};

export default Videoplayer;
