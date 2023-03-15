import React from "react";
import {useSelector} from "react-redux";
import EditProfileDisplay from "./edit-profile-display";

const EditProfile = () => {
  const profile = useSelector(
      (state) => state.profile);

  return(
      <EditProfileDisplay key={profile._id} profile={profile[0]}/>
  );
};

export default EditProfile;