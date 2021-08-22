import React from "react";
import "./videoplayer.scss";



const Videoplayer = (props) => {
  return (
    <>
      <div className="video">
        <video className="video__poster" poster={props.video.image} controls width={"100%"}></video>

      </div>
    </>
  );
};

export default Videoplayer;
