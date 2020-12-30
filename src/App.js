import React, { useState, useEffect } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Row from "./components/Row.js";
import MainContainer from "./components/MainContainer";
import { selectUser } from "./features/userSlice";
import { selectcurrentSong,setCurrentSong } from "./features/currentSongSlice";
import { useSelector } from "react-redux";
import { songs , selectSongs} from "./features/songsSlice";
import { useDispatch } from "react-redux";
import Login from "./components/Login";

function App() {
 // USER
  const user = useSelector(selectUser);
  const currentSongS = useSelector(selectSongs);

//DISPATCH
  const dispatch = useDispatch();
 console.log(currentSongS)
  useEffect(() => {
   fetch("http://localhost:3000/songs")
   .then(response => response.json())
   .then(data => dispatch(songs(data)))
   dispatch(
    setCurrentSong({
      setCurrentSong:currentSongS[0],
     } )
  );
  }, [])

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
