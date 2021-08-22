import React from 'react';
import viewsLogo from "../../assets/Icons/Icon-views.svg";
import likesLogo from "../../assets/Icons/Icon-likes.svg";
import "./videodetails.scss";

const options = { year: "numeric", month: "numeric", day: "numeric" };
const VideoDetails = (props) => {
    return (
        <div className="video-details">
                   <h1 className="video-details__title">{props.video.title}</h1>
        <div className="video-details__infobox">
        <div className="video-details__info">
          <h3 className="video-details__info--author">By {props.video.channel}</h3>
          <h3 className="video-details__info--date">
            {new Date(Number(props.video.timestamp)).toLocaleString(
              "en-US",
              options
            )}
          </h3>
        </div>
        <h3 className="video-details__views-likes">
          <img className="video-details__views-likes--img" src={viewsLogo} alt="views logo"/>
          <div className="video-details__views-likes--num">{props.video.views} </div>
          <img className="video-details__views-likes--img" src={likesLogo} alt="likes logo"/>
          <div className="video-details__views-likes--num">{props.video.likes} </div>
        </h3>
        </div>
      <p className="video-details__describe">{props.video.description}</p>
      

        </div>
    );
};

export default VideoDetails;