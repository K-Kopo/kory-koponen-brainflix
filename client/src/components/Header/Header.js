import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo/Logo-brainflix.svg";
import uploadIcon from "../../assets/Icons/Icon-upload.svg";
import "./header.scss";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="navbar__img" src={logo} alt="brainflix logo" />
      </Link>
      <form className="navbar__form">
        <input
          className="navbar__search"
          type="text"
          placeholder="      Search"
        ></input>
        <div className="navbar__box">
          <Link className="navbar__box--link" to="/video-uploads">
            <button className="navbar__box--button">
              <img
                className="navbar__box--icon"
                src={uploadIcon}
                alt="upload icon"
              />{" "}
              UPLOAD
            </button>
          </Link>
          <div className="navbar__box--avatar"></div>
        </div>
      </form>
    </div>
  );
};

export default Header;
