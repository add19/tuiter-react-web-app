import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile.json";

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateInformation(state, action) {
      let profile = state.find((profile) => profile._id === action.payload._id);
      profile.firstName = (action.payload.firstName === undefined) ? "" : action.payload.firstName;
      profile.lastName = (action.payload.lastName === undefined) ? "" : action.payload.lastName;
      profile.dateOfBirth = action.payload.dateOfBirth;
      profile.website = action.payload.website;
      profile.bio = action.payload.bio;
      profile.location = action.payload.location;
    },
  }
});

export const {updateInformation} = profileSlice.actions
export default profileSlice.reducer;

