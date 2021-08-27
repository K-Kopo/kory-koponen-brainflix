import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Logo/Logo-brainflix.svg";
import uploadIcon from "../../assets/Icons/Icon-upload.svg";
import "./header.scss";




const Header = ({video, getVideos}) => {
    // let videoID = "";
    // if (!video) {
    //     videoID = "/"
    // }
    // else {
    //     videoID = video[0].id
    
    video ? video = video[0].id : video = "";
    
    // updateVideos= () => {{getVideos}};

    
    
   
    return (
        
        <div className="navbar">
            <Link to={`/${video}`}><img className="navbar__img" src={logo} alt="brainflix logo"/></Link>
            <form className="navbar__form">
            <input className="navbar__search" type="text" placeholder="      Search"></input>
            <div className="navbar__box">
            <Link to="/video-uploads"><button className="navbar__box--button"><img className="navbar__box--icon" src={uploadIcon} alt="upload icon"/>     UPLOAD</button></Link>
            <div className="navbar__box--avatar"></div>
            </div>
            </form>
        </div>
    )
};

export default Header;