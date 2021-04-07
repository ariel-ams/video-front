import React from 'react';
import { useParams } from 'react-router';
import { Player } from "video-react";

function VideoPlayer(){
    let { videoId } = useParams();

    return (
        <div>
            <Player>
                <source src={`http://localhost:3000/api/videos/${videoId}/file`}/>
            </Player>
        </div>
    )
}

export default VideoPlayer;