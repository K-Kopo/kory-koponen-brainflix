import React, { Component } from "react";
import Header from "../../components/Header/Header";
import VideoList from "../../components/VideoList/VideoList";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Videoplayer from "../../components/Videoplayer/Videoplayer";
import NewComments from "../../components/NewComments/NewComments";
import Comments from "../../components/Comments/Comments";
import { apiRequests } from "../../utils";




class HomePage extends Component {
  state = {
    videos: [],
    currentVideo: null,
  };

  getVideoDetails = (id) => {
    apiRequests.getDetails(id).then((response) => {
      this.setState({
        currentVideo: response.data,
      });
    })
    .catch(error => {
      console.log(error)
    });
  };

  componentDidMount() {
    this.fetchVideos();
  }

  fetchVideos = () => {
    const currentVideoId = this.props.match.params.id;
    apiRequests.getAll().then((response) => {
      this.setState({
        videos: response.data,
      });
      const firstVideo = response.data[0];

      const displayVideoId = currentVideoId ? currentVideoId : firstVideo.id;
      this.getVideoDetails(displayVideoId);
    })
    .catch(error => {
      console.log(error)
    });
  };

  componentDidUpdate(prevProps) {
    const currentVideoId = this.props.match.params.id;
    const prevVideoId = prevProps.match.params.id;

    if (currentVideoId !== prevVideoId) {
      this.getVideoDetails(currentVideoId);
      window.scrollTo(0, 0);
    }
  }

  render() {
    if (!this.state.currentVideo) return <p>Loading...</p>;

    const filteredList = this.state.currentVideo
      ? this.state.videos.filter(
          (video) => video.id !== this.state.currentVideo.id
        )
      : this.state.videos;
    return (
      <div>
        <Header video={this.state.videos} />
        <Videoplayer video={this.state.currentVideo} />
        <div className="page-box">
          <div> {/* this is necessary for styling - React fragment won't work*/}
            <VideoDetails video={this.state.currentVideo} />
            <NewComments
              comments={this.state.currentVideo.comments}
            />
            <Comments comments={this.state.currentVideo.comments} />
          </div>
          <VideoList video={filteredList} />
        </div>
      </div>
    );
  }
}

export default HomePage;
