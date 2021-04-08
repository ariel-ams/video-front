import './App.css';
import VideoLibrary from './video-library/VideoLibrary';
import MultipleVideoUpload  from "./video-upload/multipleVideoUpload";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import VideoPlayer from './video-library/VideoPlayer';
import Header from './header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <MultipleVideoUpload></MultipleVideoUpload>
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
