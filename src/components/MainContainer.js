import React, { useState } from "react";
import "../styles/MainContainer.css";
import Card from "./Card";
import Player from "./Player";
import songss from "../SongsData";
import { addSongs } from "../features/songsSlice";
function MainContainer() {
  const [songs, setSongs] = useState(songss());
  console.log(addSongs);


  return (
    <div className="mainContainer">
      <div className="mainContainer-cards">
        <h3 className="mainContainer-title">Recently Played</h3>
        {songs.map((song) => (
          <Card
            image={song.cover}
            artist={song.artist}
            album={song.song}
            song={song}
            key={song.id}
          />
        ))}
      </div>

      <div className="mainContainer-column">
        <Player />
      </div>
    </div>
  );
}

export default MainContainer;
