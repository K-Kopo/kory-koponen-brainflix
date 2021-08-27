import React from 'react';
import Header from '../../components/Header/Header';
import videoThumb from '../../assets/Images/Upload-video-preview.jpg';
import '../VideoUploadsPage/videoUploadsPage.scss';

const VideoUploadsPage = () => {
    return (
        <div className="video-uploads">
            <Header />
            <h1 className="video-uploads__title">Upload Video</h1>
            <p className="video-uploads__subtitle">VIDEO THUMBNAIL</p>
            <div className="video-uploads__img"></div>
            <form className="video-uploads__form">
                <label className="video-uploads__form--label">TITLE YOUR VIDEO</label>
                <input className="video-uploads__form--input" type="text" placeholder="Add a title to your video"></input>
                <label className="video-uploads__form--label">ADD A VIDEO DESCRIPTION</label>
                <textarea className="video-uploads__form--textarea" type="text" placeholder="Add a description of your video"></textarea>
                <button className="video-uploads__form--button">PUBLISH</button>
                <button className="video-uploads__form--cancel-button">CANCEL</button>
            </form>
        </div>
    );
};

export default VideoUploadsPage;