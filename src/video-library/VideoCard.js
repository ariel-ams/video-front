import { Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@material-ui/core";
import React from "react";
import './VideoCard.css';

const VideoCard = ({title, duration, thumbnailUrl, audioCodec, videoCodec}) => {

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    return (
      <div>
        
        {/* <div className='videocard'>
          <img className='videocard__image' src={thumbnailUrl} alt='' />
          <div className="videocard__info">
            <div className="videocard__text">
              <h4>{title}</h4>
              <p>{minutes}:{seconds}</p>
            </div> 
          </div>
        </div> */}

        <Card className="root">
          <CardHeader 
            title={title}
            subheader={`${minutes}:${seconds}`}
            titleTypographyProps={{className:'header-title'}}
          />
          <CardMedia
            className="media"
            image={thumbnailUrl}
            alt={title}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              video codec: {videoCodec}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              audio codec: {audioCodec}
            </Typography>
          </CardContent>
          <CardActions>

          </CardActions>
        </Card>
      </div>
    );
}

export default VideoCard;