import { createSlice } from "@reduxjs/toolkit";

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState: {
    currentSong: [
      {
        id: "3",
        song: "Keep Going",
        artist: "Swørn",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      },
    ],
  },
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const { setCurrentSong } = currentSongSlice.actions;

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
export const selectcurrentSong = (state) => state.currentSong.currentSong;

export default currentSongSlice.reducer;
