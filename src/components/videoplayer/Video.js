


import React from 'react';
const options = {  year: 'numeric', month: 'numeric', day: 'numeric' }
const Video = (props) => {
  return (
    <>
    <div>
      <video><source src = {props.video.video}/></video>
      <h1>{props.video.title}</h1>
      <h3>By {props.video.channel} {new Date(Number(props.video.timestamp)).toLocaleString("en-US", options)}</h3>
      <h3>{props.video.views} {props.video.likes}</h3>
    </div>
    <p>{props.video.description}</p>
    
    </>
  );
};

export default Video;