import React from "react";
import "../styles/Card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../features/currentSongSlice";
function Card({ artist, cover, image, album, song }) {
  const dispatch = useDispatch();
  const selectedSongHandler = () => {
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
  };
  return (
    <div className="card" onClick={selectedSongHandler}>
      <img className="card-image" src={image} alt="" />
      <div className="card-container">
        <h4 className="card-album">{album}</h4>
        <p className="card-artist">{artist}</p>
        <p className="card-time">{cover}</p>
        <FavoriteIcon className="card-like" />
      </div>
    </div>
  );
}

export default Card;
