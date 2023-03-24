import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk}
  from "../../services/tuits-thunks";

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

const initialState = {
  tuits: [],
  loading: false
}

const tuitsSlice = createSlice({
  name: 'tuits',
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]:
        (state) => {
          state.loading = true
          state.tuits = []
        },
    [findTuitsThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits = payload
        },
    [findTuitsThunk.rejected]:
        (state, action) => {
          state.loading = false
          state.error = action.error
        },
    [deleteTuitThunk.fulfilled] :
        (state, { payload }) => {
          state.loading = false
          state.tuits = state.tuits
          .filter(t => t._id !== payload)
        },
    [createTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          state.tuits.push(payload)
        },
    [updateTuitThunk.fulfilled]:
        (state, { payload }) => {
          state.loading = false
          const tuitNdx = state.tuits
          .findIndex((t) => t._id === payload._id)
          state.tuits[tuitNdx] = {
            ...state.tuits[tuitNdx],
            ...payload
          }
        }
  },
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

