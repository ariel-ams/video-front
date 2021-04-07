import React from "react";
import './VideoCard.css';

const VideoCard = ({title, duration, thumbnailUrl}) => {

    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);

    return (
        <div className='videocard'>
          <img className='videocard__image' src={thumbnailUrl} alt='' />
          <div className="videocard__info">
            {/* <Avatar 
              className='videocard__avatar' 
              alt={channel} 
              src={channelImage} 
            /> */}
            <div className="videocard__text">
              <h4>{title}</h4>
              <p>{minutes}:{seconds}</p>
            </div> 
          </div>
        </div>
    );
}

export default VideoCard;