import React, { useState } from "react";
import "../styles/Row.css";
import MusicCard from "./MusicCard";
import songs from "../SongsData";
import Header from "./Header";
import { selectSongs } from "../features/songsSlice";
import { useSelector } from "react-redux";
function Row() {
  const [song, setSong] = useState(songs());
  const songe = useSelector(selectSongs);
  return (
    <div className="row">
      <Header />
      <h2 className="row-title">Trending</h2>
      <div className="row-container">
        {songe.map((song) => (
          <MusicCard
            image={song.cover}
            artist={song.artist}
            album={song.title}
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
