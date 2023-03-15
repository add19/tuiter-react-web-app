import React from "react";
import {useSelector} from "react-redux";
import "./index.css"
import ProfileDisplay from "./profile-display";

const Profile = () => {
  const profile = useSelector(
      (state) => state.profile);

  return(
      <ProfileDisplay key={profile._id} profile={profile[0]}/>
  );
};

export default Profile;