import React from "react";
import "../styles/MainContainer.css";
import Card from "./Card";
import Player from "./Player";
import { selectSongs } from "../features/songsSlice";
import { useSelector } from "react-redux";
function MainContainer() {
  const songs = useSelector(selectSongs);

  return (
    <div className="mainContainer">
      <div className="mainContainer-cards">
        <h3 className="mainContainer-title">Recently Played</h3>
        {songs.map((song) => (
          <Card
            image={song.cover}
            artist={song.artist}
            album={song.title}
            key={song.id}
            song={song}
          />
        ))}
      </div>
      <div className="mainContainer-column">
        {songs ? <Player /> : "LOADING"}
      </div>
    </div>
  );
}

export default MainContainer;
