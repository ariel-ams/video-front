import './App.css';
import VideoLibrary from './video-library/VideoLibrary';
import VideoUpload  from "./video-upload/videoUpload";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import VideoPlayer from './video-library/VideoPlayer';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/video/:videoId'>
            <VideoPlayer></VideoPlayer> 
          </Route>
          <Route path='/upload'>
            <VideoUpload></VideoUpload>
          </Route>
          <Route path='/'>
            <VideoLibrary></VideoLibrary>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
