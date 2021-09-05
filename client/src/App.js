import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadsPage from "./pages/VideoUploadsPage/VideoUploadsPage";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/video-uploads" render = {(routerProps)=> <VideoUploadsPage component={<Header />}{...routerProps}/>}/>
        <Route path="/:id" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
