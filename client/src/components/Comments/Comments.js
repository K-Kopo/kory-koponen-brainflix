import "./comments.scss";
import React from "react";
import { dateConvert } from "../../utils";

const Comments = ({ comments }) => {
  return (
    <section className="comments">
      {comments.map((each) => (
        <article key={each.id} className="comments__outerbox">
          <div className="comments__img"></div>
          <div className="comments__innerbox">
            <div className="comments__name-box">
              <div className="comments__name-box--name">{each.name}</div>
              <div className="comments__name-box--date">
                {dateConvert(each.timestamp)}
              </div>
            </div>
            <div className="comments__text">{each.comment}</div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Comments;
