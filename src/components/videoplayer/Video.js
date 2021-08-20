import React from "react";
import viewsLogo from "../../assets/Icons/Icon-views.svg";
import likesLogo from "../../assets/Icons/Icon-likes.svg";
// import mohan from "../../assets/Icons/Mohan-muruge.jpg";

const options = { year: "numeric", month: "numeric", day: "numeric" };

const Video = (props) => {
  return (
    <>
      <div className="video">
        <video poster={props.video.image} 
              controls
              width={'100%'} >
          
        </video>
        <h1 className="video__title">{props.video.title}</h1>
        <h3 className="video__info">
          By {props.video.channel}{" "}
          {new Date(Number(props.video.timestamp)).toLocaleString(
            "en-US",
            options
          )}
        </h3>
        <h3 className="video__views-likes">
         <img src= {viewsLogo}/>{props.video.views}<img src= {likesLogo}/>{props.video.likes}
        </h3>
      </div>
      <p className="video__describe">{props.video.description}</p>
      <section class="new-comment">
        <h3 class="new-comment__title">3 Comments</h3>
        <div class="new-comment__outerbox">
          <div class="new-comment__outerbox__img"></div>
          <div class="new-comment__outerbox--box">
            <form action="submit" id="commentForm">
              <label for="comment" class="new-comment__text">
                Join the Conversation
              </label>
              <textarea
                id="commentText"
                for="comment"
                name="commentText"
                type="reset"
                rows="5"
                cols="20"
                placeholder="Add a new comment"
              ></textarea>
              <button type="submit" class="comments__button">
                Comment
              </button>
            </form>
          </div>
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
    </>
  );
};

export default Video;
