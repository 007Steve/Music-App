import React, { useEffect } from "react";
import "../styles/Card.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useDispatch } from "react-redux";
import { setCurrentSong } from "../features/currentSongSlice";
function Card({ album, artist, time, image, song, id }) {
  const dispatch = useDispatch();
  // const [currentSong, setCurrentSong] = useState([]);
  const songOne = song;
  useEffect(() => {
    selectedSongHandler();
  }, []);
  const selectedSongHandler = () => {
    setCurrentSong(songOne);
    dispatch(
      setCurrentSong({
        setCurrentSong: song,
      })
    );
  
  };

  return (
    <div className="card" onClick={selectedSongHandler}>
      <img className="card-image" src={song.cover} alt="" />
      <div className="card-container">
        <h4 className="card-album">{song.song}</h4>
        <p className="card-artist">{song.artist}</p>
        <p className="card-time">{time}</p>
        <FavoriteIcon className="card-like" />
      </div>
    </div>
  );
}

export default Card;
