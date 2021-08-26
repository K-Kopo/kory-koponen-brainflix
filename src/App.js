import React from "react";
import "./App.scss";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoUploadsPage from "./pages/VideoUploadsPage/VideoUploadsPage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/video-uploads" component={VideoUploadsPage}></Route>
          <Route path="/:id" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
// class App extends React.Component {

//   render ()
//   {
//   return (
//     <BrowserRouter>
//     <Switch>
//     <Route path="/" exact component={HomePage}/>
//     <Route path="/video-uploads" component={VideoUploadsPage}></Route>
//     <Route path="/:videoId" component={HomePage}/>
//     </Switch>
//     </BrowserRouter>
//   );
// }
// }

// export default App;
