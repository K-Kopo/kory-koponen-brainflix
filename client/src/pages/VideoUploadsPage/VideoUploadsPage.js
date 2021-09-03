import React from "react";
import Header from "../../components/Header/Header";
import "../VideoUploadsPage/videoUploadsPage.scss";
// import { Link } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {url} from '../../utils';



const VideoUploadsPage = () => {
  
  
  
  const videoUpload = (event) => {
    event.preventDefault();
    const videoTitle = event.target.title.value;
    const videoDescription = event.target.description.value;
    
    axios.post(`${url}videos`, {
      id: uuidv4(),
      title: videoTitle,
      description: videoDescription
      
    })
    .then(response =>{
      console.log(response);
    })
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
      <form id="videoForm" onSubmit={videoUpload} className="video-uploads__form">
        <label className="video-uploads__form--label">TITLE YOUR VIDEO</label>
        <input
          className="video-uploads__form--input"
          type="text"
          name="title"
          placeholder="Add a title to your video"
        ></input>
        <label className="video-uploads__form--label">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          className="video-uploads__form--textarea"
          type="text"
          name="description"
          placeholder="Add a description of your video"
        ></textarea>
        <div className="video-uploads__form--buttonbox">
          {/* <Link  to="/" className="video-uploads__form--button"> */}
            <button type="submit" className="video-uploads__form--button2">
              PUBLISH
            </button>
          {/* </Link> */}
          <button className="video-uploads__form--cancel-button">CANCEL</button>
        </div>
      </form>
    </div>
  );
};

export default VideoUploadsPage;
