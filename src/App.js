import './App.css';
import VideoLibrary from './video-library/VideoLibrary';
import VideoUpload  from "./video-upload/videoUpload";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/video/:videoId'>
            <div>

            </div>  
          </Route>
          <Route path='/'>
            <VideoLibrary></VideoLibrary>
          </Route>
          <Route path='/upload'>
            <VideoUpload></VideoUpload>
          </Route>
        </Switch>
      </BrowserRouter>
      <header className="App-header">
        {/* <Player>
        <source src="http://localhost:3000/api/video"/>
        </Player> */}
      </header>
    </div>
  );
}

export default App;
