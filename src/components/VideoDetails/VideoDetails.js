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
      
      <section className="new-comment">
        <h3 className="new-comment__title">3 Comments</h3>
        <div className="new-comment__outerbox">
          <div className="new-comment__outerbox--img"></div>

          <form
            className="new-comment__outerbox--form"
            action="submit"
            id="commentForm"
          >
            <div className="new-comment__outerbox--inputbox">
            <label for="comment" className="new-comment__outerbox--form--label">
              Join the Conversation
            </label>
            <textarea
            className="new-comment__outerbox--form--textarea"
              id="commentText"
              for="comment"
              name="commentText"
              type="reset"
              rows="5"
              cols="20"
              placeholder="Write comment here"
            ></textarea>
            </div>
            <button type="submit" className="new-comment__outerbox--form--button">
              Comment
            </button>
          </form>
        </div>
      </section>
      <section className="comments">
        {props.video.comments.map((each) => (
          <article className="comments__outerbox">
            <div className="comments__img"></div>
            <div className="comments__innerbox">
              <div className="comments__name-box">
                <div className="comments__name-box--name">{each.name}</div>
                <div className="comments__name-box--date">
                  {new Date(Number(each.timestamp)).toLocaleString(
                    "en-US",
                    options
                  )}
                </div>
              </div>
              <div className="comments__text">{each.comment}</div>
            </div>
          </article>
        ))}
      </section> 
        </div>
    );
};

export default VideoDetails;