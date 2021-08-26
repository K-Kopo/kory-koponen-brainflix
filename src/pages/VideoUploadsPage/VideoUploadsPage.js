import React from 'react';
import Header from '../../components/Header/Header';
import videoThumb from '../../assets/Images/Upload-video-preview.jpg';

const VideoUploadsPage = () => {
    return (
        <div>
            <Header />
            <h1>Upload Video</h1>
            <p>VIDEO THUMBNAIL</p>
            <img src={videoThumb} alt="bike handlebars"/>
        </div>
    );
};

export default VideoUploadsPage;