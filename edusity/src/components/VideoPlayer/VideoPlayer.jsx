import React from 'react';
import './VideoPlayer.css';
import video from '../../assets/video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  return (
    <div className={`video-player ${playState ? '' : 'hide'}`}>
      <video src={video} autoPlay muted controls />
      <button 
        className="close-button" 
        onClick={() => setPlayState(false)}
      >
        Close
      </button>
    </div>
  );
};

export default VideoPlayer;
