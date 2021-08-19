import App from "../../App";
import logo from "../../assets/Logo/Logo-brainflix.svg"
import React from 'react';

const Header = () => {
    return (
        <div className="navbar">
            <img className="navbar__img" src={logo}/>
            <input classNamr="navbar__search" type="text" placeholder="Search"></input>
            <button className="navbar__button">+ UPLOAD</button>
            <div className="navbar__avatar"></div>
        </div>
    );
};

export default Header;