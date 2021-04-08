import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  DialogActions,
  DialogTitle,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import PlayIcon from '@material-ui/icons/PlayArrow';
import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import "./VideoCard.css";

const VideoCard = ({
  title,
  duration,
  thumbnailUrl,
  audioCodec,
  videoCodec,
  id,
  loadVideos
}) => {
  const [open, setOpen] = React.useState(false);
  let history = useHistory();

  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteVideo = () => {
    axios.delete(`http://localhost:3000/api/videos/${id}`)
    .then(() => {
      setOpen(false);
      loadVideos();
    });
  };

  const playVideo = () => {
    history.push(`/video/${id}`);
  }

  return (
    <div>
      <Card className="root">
        <CardHeader
          title={title}
          subheader={`${minutes}:${seconds}`}
          titleTypographyProps={{ className: "header-title" }}
        />
        <CardMedia className="media" image={thumbnailUrl} alt={title} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            video codec: {videoCodec}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            audio codec: {audioCodec}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton onClick={playVideo}>
              <PlayIcon></PlayIcon>
          </IconButton>
          <IconButton onClick={handleClickOpen}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Do you want to delete this video?"}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={deleteVideo} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default VideoCard;
