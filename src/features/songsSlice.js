import { createSlice } from "@reduxjs/toolkit";

export const songsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
  },
  reducers: {
    songs: (state, action) => {
      state.songs = action.payload;
    },
    currrentSong: (state, action) => {
      state.songs = state.length - 1;
    },
  },
});

export const { songs, currrentSong } = songsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSongs = (state) => state.songs.songs;

export default songsSlice.reducer;
