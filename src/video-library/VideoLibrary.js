import { CircularProgress, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import './VideoLibrary.css';

function VideoLibrary() {
    const [videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    //const [isError, setIsError] = useState(false);

    useEffect(() => {
        axios
          .get(`http://localhost:3000/api/videos/library`)
          .then(response => {
            createVideoCards(response.data);
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
        }, 
    []);

    async function createVideoCards(videos){
        let newVideoCards = [];
        for(const video of videos){
            newVideoCards.push({
                title: video.name,
                duration: video.lenghtInSeconds,
                thumbnailUrl: video.thumbnail ? video.thumbnail : "",
                id: video._id,
                audioCodec: video.audioCodec,
                videoCodec: video.videoCodec
            });
        }
        setVideoCards(newVideoCards);
        setIsLoading(false);
    }

    return(
        <div className="videoLibrary">
            { isLoading ? <CircularProgress className="loading" color="secondary" /> : null }
            <div className="library__videos">
                <Grid container spacing={3}>
                    {
                        videoCards.map(video => {
                            console.log(video);
                            return (
                                <Grid item xs>
                                    <Link key={video.id} to={`/video/${video.id}`}>
                                        <VideoCard key={video.id}
                                            title={video.title}
                                            duration={video.duration}
                                            thumbnailUrl={video.thumbnailUrl}
                                            audioCodec={video.audioCodec}
                                            videoCodec={video.videoCodec}
                                            />
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </div>
    );
};

export default VideoLibrary;