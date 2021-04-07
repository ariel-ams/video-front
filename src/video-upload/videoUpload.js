import axios from "axios";
import React, { useState } from "react";
import 'video-react/dist/video-react.css';

function VideoUpload() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = () => {
    const formData = new FormData();
    formData.append("video", selectedFile);

    axios
      .post("http://localhost:3000/api/upload/video", formData)
      .then((response) => response.json())
      .then((result) => {
        console.log("Success: ", result);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <input type="file" name="video" id="video" onChange={changeHandler} />
      {isFilePicked ? (
        <div>
          <p>Video name: {selectedFile.name} </p>
        </div>
      ) : (
        <p>Choose a video to upload</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}

export default VideoUpload;
