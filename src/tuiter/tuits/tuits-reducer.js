import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
  "userName": "NASA",
  "handle": "@nasa",
  "avatar": "download.png",
};

const templateTuit = {
  ...currentUser,
  "topic": "Space",
  "time": "2h",
  "liked": false,
  "comments": 0,
  "retweets": 0,
  "likes": 0,
}


const tuitsSlice = createSlice({
  name: 'tuits',
  initialState: tuits,
  reducers: {
    deleteTuit(state, action) {
      const index = state
      .findIndex(tuit =>
          tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
    todoLikeToggle(state, action) {
      const tuitStat = state.find((tuitStat) =>
          tuitStat._id === action.payload._id)

      if(tuitStat.liked === false) {
        tuitStat.likes++;
        tuitStat.liked = true;
      } else {
        tuitStat.likes--;
        tuitStat.liked = false;
      }
    }
  }
});

export const {todoLikeToggle, createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;

