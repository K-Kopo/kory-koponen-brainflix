import React from "react";
import "./newcomments.scss";
import { Link } from "react-router-dom";

const NewComments = ({ video, addComment }) => {
  return (
    <section className="new-comment">
      <h3 className="new-comment__title">{video.comments.length} Comments</h3>
      <div className="new-comment__outerbox">
        <div className="new-comment__outerbox--img"></div>

        <form
          onSubmit={addComment}
          className="new-comment__outerbox--form"
          action="submit"
          id="commentForm"
        >
          <div className="new-comment__outerbox--inputbox">
            <label
              htmlFor="comment"
              className="new-comment__outerbox--form--label"
            >
              Join the Conversation
            </label>
            <textarea
              className="new-comment__outerbox--form--textarea"
              id="comment"
              htmlFor="comment"
              name="comment"
              type="reset"
              rows="5"
              cols="20"
              placeholder="Write comment here"
            ></textarea>
          </div>
          <Link to="/" className="new-comment__outerbox--form--link">
            {" "}
            <button
              type="submit"
              className="new-comment__outerbox--form--button"
            >
              Comment
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default NewComments;
