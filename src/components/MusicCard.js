import React from "react";
import "../styles/MusicCard.css";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../features/currentSongSlice";
function MusicCard({ image, album, artist, song }) {
  const dispatch = useDispatch();
  const selectedSongHandler = () => {
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
    console.log(artist);
  };
  return (
    <div className="musicCard" onClick={selectedSongHandler}>
      <img className="musicCard-image" src={image} alt="" />
      <div className="musicCard-info-container">
        <h3 className="musicCard-info-album">{album}</h3>
        <p className="musicCard-info-artist">{artist}</p>
      </div>
    </div>
  );
}

export default MusicCard;
