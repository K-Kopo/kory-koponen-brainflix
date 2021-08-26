import React from 'react';
import "./newcomments.scss";

const NewComments = ({video, addComment}) => {
  if (!video) return <p>Loading...</p>;
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
            <label /*for="comment"*/ className="new-comment__outerbox--form--label">
              Join the Conversation
            </label>
            <textarea
            className="new-comment__outerbox--form--textarea"
              id="comment"
              // for="comment"
              name="comment"
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
    );
};

export default NewComments;