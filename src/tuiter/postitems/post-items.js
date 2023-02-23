import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./index.css";

import {
  faComment,
} from '@fortawesome/free-regular-svg-icons'
import {
  faRetweet,
  faUpload,
  faHeart,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons'


const PostItem = (
    {
      postitem = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "avatar": "tesla.png",
        "retweets": "2K",
        "comments": "567",
        "likes": "38.2K",
        "card_image": "spaceximg.png"
      }
    }
) => {
  return (
    <li className="list-group-item b-0 bg-transparent">
      <div className="row align-top">
        <div className="col-1"><img src={`/images/${postitem.avatar}`}
                                    className="rounded-circle"
                                    width={40} alt="Avatar"/>
        </div>
        <div className="col-10">
          <span><b>{postitem.userName}</b> <FontAwesomeIcon className={"wd-twitter-button"} icon={faCheckCircle} /></span>  <span className={"wd-time-handle-color"}>{postitem.userHandle} .</span> <span className={"wd-time-handle-color"}>{postitem.time}</span>
          <br/>
          <span>{postitem.title}</span>
        </div>
        <div className="col-1">
          <i className="fa-solid fa-ellipsis pe-2"></i>
        </div>
      </div>


      <div className="card ms-5 mt-2 wd-article-card rounded-4">
        <img className="card-img-top rounded-4 " src={`/images/${postitem.card_image}`}
             alt="Card image cap"></img>
        </div>
        <div className="row ms-5 mt-3">
              <span className="col-3">
                <a href="src/tuiter/postitems/post-items#"><FontAwesomeIcon color={"darkgray"} icon={faComment} /></a><span> {postitem.comments}</span>
              </span>
          <span className="col-3">
                <a href="src/tuiter/postitems/post-items#"><FontAwesomeIcon color={"darkgray"} icon={faRetweet} /></a><span> {postitem.retweets}</span>
              </span>
          <span className="col-3">
                <a className=" wd-likes-red"><FontAwesomeIcon color={"red"} icon={faHeart} /></a><span> {postitem.likes}</span>
              </span>
          <span className="col-3">
                <a href="src/tuiter/postitems/post-items#"><FontAwesomeIcon color={"darkgray"} icon={faUpload} /></a><span></span>
              </span>
        </div>
    </li>
  );
};

export default PostItem;