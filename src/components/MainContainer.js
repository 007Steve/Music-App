import React, { useState} from "react";
import "../styles/MainContainer.css";
import Card from "./Card";
import Player from "./Player";
import songss from "../SongsData";

function MainContainer() {
  const [songs, setSongs] = useState(songss());
  const [show, setShow] = useState();
  // show player after 2 seconds
  const num = setTimeout(() => {
    setShow(true);
  }, 500);

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
        {show ? <Player /> : "Loading"}
      </div>
    </div>
  );
}

export default MainContainer;
