import React from "react";
// import mohan from "../../assets/Icons/Mohan-muruge.jpg";

const options = { year: "numeric", month: "numeric", day: "numeric" };

const Video = (props) => {
  return (
    <>
      <div>
        <video>
          <source src={props.video.video} />
        </video>
        <h1>{props.video.title}</h1>
        <h3>
          By {props.video.channel}{" "}
          {new Date(Number(props.video.timestamp)).toLocaleString(
            "en-US",
            options
          )}
        </h3>
        <h3>
          {props.video.views} {props.video.likes}
        </h3>
      </div>
      <p>{props.video.description}</p>
      <section class="comments">
        <h3 class="comments__title">3 Comments</h3>
        <div class="comments__outerbox">
          <div class="comments__outerbox__img"></div>
          <div class="comments__outerbox--box">
            <form action="submit" id="commentForm">
              <label for="comment" class="comments__text">
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
      <section>
        {props.video.comments.map((each) => (
          <div>
            <div>
              <li>{each.name}</li>
              <li>
                {new Date(Number(each.timestamp)).toLocaleString(
                  "en-US",
                  options
                )}
              </li>
            </div>
            <li>{each.comment}</li>
          </div>
        ))}
      </section>
    </>
  );
};

export default Video;
