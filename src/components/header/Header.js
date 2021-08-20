
import logo from "../../assets/Logo/Logo-brainflix.svg"
import searchIcon from "../../assets/Icons/Icon-search.svg"
import React from 'react';
import "../header/header.scss";




const Header = () => {
    return (
        <div className="navbar">
            <img className="navbar__img" src={logo}/>
            <input className="navbar__search" type="text" placeholder="     Search"></input>
            <div className="navbar__box">
            <button className="navbar__box--button">+ UPLOAD</button>
            <div className="navbar__box--avatar"></div>
            </div>
        </div>
    );
};

export default Header;