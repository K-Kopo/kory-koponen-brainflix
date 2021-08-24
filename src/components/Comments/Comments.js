import "./comments.scss";
import React from 'react';
const options = { year: "numeric", month: "numeric", day: "numeric" };


const Comments = (props) => {
    return (
        <section className="comments">
        {props.video.comments.map((each) => (
          <article key={each.id} className="comments__outerbox">
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
    );
};

export default Comments;