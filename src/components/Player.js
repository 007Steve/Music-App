import React, { useRef, useState } from "react";
import "../styles/Player.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import {
  selectcurrentSong,
  setCurrentSong,
} from "../features/currentSongSlice";
import { selectSongs } from "../features/songsSlice";
import { useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

function Player() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const songe = useSelector(selectSongs);
  const newCurrentSong = useSelector(selectcurrentSong);
  const currentSong = newCurrentSong.setCurrentSong;
  const [isPlaying, setIsPlaying] = useState(currentSong);

 

  const countPlusOne = () => {
    setCount(count + 1);
  };

  const countMinusOne = () => {
    setCount(count - 1);
  };

  // Drag input slider
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  // Set current time and duration
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  // Get time  of the song
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  // Time update
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration: duration });
  };
  // useREF
  const audioRef = useRef(null);
  // play music and pause
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  // skip song backwards
  const skipSongBack = () => {
    const num = newCurrentSong.setCurrentSong.id;
    countMinusOne(num);
    const song = songe[count];
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
    console.log(song);
  };
  // skip song forwards
  const skipSongForwoard = () => {
    const num = newCurrentSong.setCurrentSong.id;
    countPlusOne(num);
    const song = songe[count];
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
    console.log(song);
  };

  return (
    <div className="player">
      <img className="player-image" src={currentSong.cover} alt="" />
      <h4>{currentSong.title}</h4>
      <div className="player-time-control">
        <p className="player-start-time">{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p className="player-end-time">{getTime(songInfo.duration)}</p>
      </div>
      <div className="player-icons-controls">
        <SkipPreviousIcon className="btn-grads" onClick={skipSongBack} />
        {isPlaying ? (
          <PauseCircleFilledIcon
            className="btn-grad"
            fontSize="large"
            onClick={playSongHandler}
          />
        ) : (
          <PlayCircleFilledIcon
            className="btn-grad"
            // fontSize="large"
            onClick={playSongHandler}
          />
        )}
        <SkipNextIcon className="btn-grads" onClick={skipSongForwoard} />
        <audio
          autoPlay
          onTimeUpdate={timeUpdateHandler}
          ref={audioRef}
          src={currentSong.audio}
          onLoadedMetadata={timeUpdateHandler}
        ></audio>
      </div>
    </div>
  );
}

export default Player;
