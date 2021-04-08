import React, { useState } from 'react';
import http from "../http-common";

function UploadFiles(){
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [message, setMessage] = useState([]);

    const changeHandler = (event) => {
        setSelectedFiles(event.target.files);
        setMessage([]);
    };

    var uploadFiles = () => {
        for (let i = 0; i < selectedFiles.length; i++) {
            upload(selectedFiles[i]);
        }
    }

    var upload = (file) => {
        uploadToServer(file).then(() => {
            setMessage([...message, "Uploaded the file successfully " + file.name]);
        });
    }

    var uploadToServer = (file) => {
        let formData = new FormData();

        console.log(file);
        formData.append("video", file);
        
        return http.post("http://localhost:3000/api/upload/video", 
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    return (
        <div className="container">

        <div className="row my-3">
          <div className="col-8">
            <label className="btn btn-default p-0">
              <input type="file" multiple onChange={changeHandler} />
            </label>
          </div>

          <div className="col-4">
            <button
              className="btn btn-success btn-sm"
              disabled={!selectedFiles}
              onClick={uploadFiles}
            >
              Upload
            </button>
          </div>
        </div>

        {message.length > 0 && (
          <div className="alert alert-secondary" role="alert">
            <ul>
              {message.map((item, i) => {
                return ( <li key={i}>{item}</li> );
              })}
            </ul>
          </div>
        )}

        </div>
    )
}


export default UploadFiles;