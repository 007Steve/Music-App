import React, { useState } from "react";
import "../styles/Row.css";
import MusicCard from "./MusicCard";
import songs from "../SongsData";
import Header from "./Header";

function Row() {
  const [song, setSong] = useState(songs());

  return (
    <div className="row">
      <Header />
      <h2 className="row-title">Trending</h2>
      <div className="row-container">
        {song.map((song) => (
          <MusicCard
            image={song.cover}
            artist={song.artist}
            album={song.song}
            key={song.id}
            song={song}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
