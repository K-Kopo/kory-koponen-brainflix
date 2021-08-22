import React from "react";
import "./video.scss";



const Video = (props) => {
  return (
    <>
      <div className="video">
        <video poster={props.video.image} controls width={"100%"}></video>

      </div>
    </>
  );
};

export default Video;
