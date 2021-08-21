import React from "react";
import viewsLogo from "../../assets/Icons/Icon-views.svg";
import likesLogo from "../../assets/Icons/Icon-likes.svg";
import "../videoplayer/video.scss";



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
