import React, { Component } from "react";
import Header from '../../components/Header/Header';

import VideoList from '../../components/VideoList/VideoList';
import VideoDetails from "../../components/VideoDetails/VideoDetails"
import Videoplayer from '../../components/Videoplayer/Videoplayer';

import NewComments from '../../components/NewComments/NewComments';
import Comments from '../../components/Comments/Comments'
import {url} from '../../utils';
import {api_key} from '../../utils';
import { apiRequests } from "../../utils";
import axios from "axios";

class HomePage extends Component {
    state = {
        videos: [],
        currentVideo: null
    }
    // changeVideo = (id) => {
    //   let newVideo = this.state.videos.find(video => video.id === id)
    //   console.log(newVideo);
      
    //   this.setState ({
    //     currentVideo: newVideo
    //   })
    // }
    
    getVideoDetails = (id)=> {
        axios
        .get(`${url}videos/${id}?api_key=${api_key}`)
        .then(response => {
            console.log(response.data);
            this.setState({
                currentVideo: response.data
            });
        })
    }

    componentDidMount(){
        this.fetchVideos();
    }
    
    fetchVideos = () => {
         // Get the movieId parameter value from the URL.
        const currentVideoId = this.props.match.params.id;
        console.log(currentVideoId);
        apiRequests.getAll().then(response => {
            console.log(response.data);
            this.setState({
                
                videos: response.data,
            });
            const firstVideo = response.data[0];

            const displayVideoId = currentVideoId ? currentVideoId : firstVideo.id
            console.log(firstVideo.id);
            console.log(displayVideoId);
            this.getVideoDetails(displayVideoId);
            
        });
    }

    componentDidUpdate(prevProps) {
      const currentVideoId = this.props.match.params.id;
      const prevVideoId= prevProps.match.params.id;
  
      console.log('Previous: ', prevVideoId);
      console.log('Current: ', currentVideoId);
  
      // We need to compare the previous value of movieID URL parameter with the current value
      // and only make an API request if we are changing URLs. This is required to prevent infinite loop of render > componentDidUpdate > render
      if (currentVideoId !== prevVideoId) {
        this.getVideoDetails(currentVideoId);
      } 
    }
  
    render() {
        const filteredList = this.state.currentVideo 
        ? this.state.videos.filter(
            (video) => video.id !== this.state.currentVideo.id
          )
          : this.state.videos
        console.log(this.state.videos);
    return (
      <div>
        <Header />
        <Videoplayer video={this.state.currentVideo} />
        <div className="page-box">
          <div>
            <VideoDetails video={this.state.currentVideo} />
            <NewComments video={this.state.currentVideo} />
            <Comments video={this.state.currentVideo} />
          </div>
          <VideoList
            
            video={filteredList}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;
