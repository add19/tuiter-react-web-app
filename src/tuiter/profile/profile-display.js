import React from "react";
import {
  faLocationDot,
  faBirthdayCake,
    faCalendarDays,
    faLongArrowLeft
}
  from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const ProfileInformation = (
    {
      profile = {
        firstName: 'Jose',
        lastName: 'Annunziato',
        handle: '@jannunzi',
        profilePicture: 'elon_musk.jpeg',
        bannerPicture: 'polyglot.png',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '7/7/1968',
        dateJoined: '4/2009',
        followingCount: 340,
        followersCount: 420
      }
    }
) => {
  console.log(profile);
  return(
      <>
        <div className="row ms-2">
          <div className={"col-1 ms-0 mt-2"}>
            <FontAwesomeIcon icon={faLongArrowLeft} />
          </div>
          <div className={"col-11 ps-0"}>
            <h2>{profile.firstName} {profile.lastName}</h2>
          </div>
        </div>
        <div className={"row"}>
            <img src={`/images/${profile.bannerPicture}`}/>
        </div>
        <div className={"row"}>
          <div className={"ms-3"}>
            <img className={"profile-img"} src={`/images/${profile.profilePicture}`}/>
            <Link to={"/tuiter/edit-profile"} className="mt-2 me-4 btn btn-outline-light text-dark border-dark fw-bolder rounded-pill float-end">Edit profile</Link>
          </div>
        </div>
        <div className={"row"}>
          <h3 className={"fw-bolder ms-3 mb-0 mt-4"}>{profile.firstName} {profile.lastName}</h3>
          <p className={"ms-3 mt-0 sub-items"}>{profile.handle}</p>
        </div>
        <div className={"row mt-2"}>
          <span className={"ms-3 mt-0"}>{profile.bio}</span>
        </div>
        <div className={"row mt-3"}>
          <div className={"col-3"}>
            <span className={"ms-3 sub-items"}><FontAwesomeIcon icon={faLocationDot} /> {profile.location}</span>
          </div>
          <div className={"col-4"}>
            <span className={"sub-items"}><FontAwesomeIcon icon={faBirthdayCake} /> Born {profile.dateOfBirth}</span>
          </div>
          <div className={"col-4"}>
            <span className={"sub-items"}><FontAwesomeIcon icon={faCalendarDays} /> Joined {profile.dateJoined}</span>
          </div>
        </div>

        <div className={"row mt-3"}>
          <div className={"col-3"}>
            <span className={"ms-3 fw-bolder"}>{profile.followersCount}</span> <span className={"sub-items"}> Followers</span>
          </div>
          <div className={"col-4"}>
            <span className={"fw-bolder"}>{profile.followingCount}</span> <span className={"sub-items"}> Following</span>
          </div>
        </div>
      </>

  );
};


export default ProfileInformation;