
import logo from "../../assets/Logo/Logo-brainflix.svg"
import uploadIcon from "../../assets/Icons/Icon-upload.svg"
import React from 'react';
import "../header/header.scss";




const Header = () => {
    return (
        <div className="navbar">
            <img className="navbar__img" src={logo} alt="brainflix logo"/>
            <form className="navbar__form">
            <input className="navbar__search" type="text" placeholder="           Search"></input>
            <div className="navbar__box">
            <button className="navbar__box--button"><img className="navbar__box--icon" src={uploadIcon} alt="upload icon"/>     UPLOAD</button>
            <div className="navbar__box--avatar"></div>
            </div>
            </form>
        </div>
    );
};

export default Header;