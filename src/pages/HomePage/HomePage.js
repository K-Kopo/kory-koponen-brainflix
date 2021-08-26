import React, { Component } from "react";
import Header from '../../components/Header/Header';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetails from "../../components/VideoDetails/VideoDetails"
import Videoplayer from '../../components/Videoplayer/Videoplayer';
import NewComments from '../../components/NewComments/NewComments';
import Comments from '../../components/Comments/Comments'
import { apiRequests } from "../../utils";
import {url} from '../../utils'
import { api_key } from "../../utils";
import axios from "axios";


class HomePage extends Component {
    state = {
        videos: [],
        currentVideo: null
    }

    
    addComment = (event) => {
      console.log(event.target.value);
      const currentId = this.state.currentVideo.id;
      axios.post(`${url}videos/${currentId}/comments?api_key=${api_key}`,{
          comment: event.target.value.comment,
          id: currentId
      })
      .then(response => {

        this.fetchVideos();
        
      })
    }
    getVideoDetails = (id)=> {
        apiRequests.getDetails(id)
        // .get(`${url}videos/${id}?api_key=${api_key}`)
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
            <NewComments video={this.state.currentVideo} addComment={this.addComment}/>
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
