import React, { useState, useEffect } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Row from "./components/Row.js";
import MainContainer from "./components/MainContainer";
import { selectUser } from "./features/userSlice";
import { selectcurrentSong } from "./features/currentSongSlice";
import { useSelector } from "react-redux";
import { songs } from "./features/songsSlice";
import { useDispatch } from "react-redux";
import SongsData from "./SongsData";
import Login from "./components/Login";

function App() {

  



  // USER
  const user = useSelector(selectUser);
//DISPATCH
  const dispatch = useDispatch();

  const [songz, setSongz] = useState(SongsData());
  console.log(songz);

  useEffect(() => {
    songss();
    // selectedSongHandler()
  }, []);
  // SONG
  const songss = () => {
    dispatch(
      songs({
        songs: songz,
      })
    );
  };

  // const selectedSongHandler = () => {
  //   setCurrentSong(songOne);
  //   dispatch(
  //     setCurrentSong({
  //       setCurrentSong: song,
  //     })
  //   );
  
  // };
  return (
    <>

      {user ? (
        <div className="App">
          <Sidebar />
         
          <div className="container">
            <Row />
            <MainContainer />
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
