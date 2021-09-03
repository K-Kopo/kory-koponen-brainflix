import React from "react";
import Header from "../../components/Header/Header";
import "../VideoUploadsPage/videoUploadsPage.scss";
import { Link } from "react-router-dom";



const VideoUploadsPage = () => {
  
  // videoForm.addEventListener('submit');
  
  const videoUpload = () => {
    // const videoForm = event.target;
    // console.log(videoForm);
    // event.preventDefault();
    return alert("Video uploaded successfully!");
    
    
  };

  return (
    <div className="video-uploads">
      <Header />
      <div className="video-uploads__titlebox">
        <h1 className="video-uploads__title">Upload Video</h1>
      </div>
      <p className="video-uploads__subtitle">VIDEO THUMBNAIL</p>
      <div className="video-uploads__img"></div>
      <form id="videoForm"  className="video-uploads__form">
        <label className="video-uploads__form--label">TITLE YOUR VIDEO</label>
        <input
          className="video-uploads__form--input"
          type="text"
          placeholder="Add a title to your video"
        ></input>
        <label className="video-uploads__form--label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="video-uploads__form--textarea"
          type="text"
          placeholder="Add a description of your video"
        ></textarea>
        <div className="video-uploads__form--buttonbox">
          <Link onClick={videoUpload} to="/" className="video-uploads__form--button">
            {/* <button type="submit" className="video-uploads__form--button2"> */}
              PUBLISH
            {/* </button> */}
          </Link>
          <button className="video-uploads__form--cancel-button">CANCEL</button>
        </div>
      </form>
    </div>
  );
};

export default VideoUploadsPage;
