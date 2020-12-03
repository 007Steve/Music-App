import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import songsReducer from "../features/songsSlice";
import userReducer from "../features/userSlice";
import currentSongReducer from "../features/currentSongSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    songs: songsReducer,
    user: userReducer,
    currentSong: currentSongReducer,
  },
});
