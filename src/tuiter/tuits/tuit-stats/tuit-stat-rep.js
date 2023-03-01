import {
  faHeart,
  faComment,
  faRetweet,
  faShareNodes
} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {todoLikeToggle} from "../tuits-reducer";

const TuitItem = (
    {
      tuititem = {
        "_id": "123",
        "topic": "Space",
        "userName": "SpaceX",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "2h",
        "liked": true,
        "comments": 123,
        "retweets": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars. You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
        "image": "tesla.jpeg",
      }
    }
) => {
  const dispatch = useDispatch();
  const toggleLike = (tuitStat) => {
    dispatch(todoLikeToggle(tuitStat));
  }
  return (
      <>
        <div className="row ms-5 mt-3">
              <span className="col-3">
                <a ><FontAwesomeIcon color={"darkgray"} icon={faComment} /></a><span> {tuititem.comments}</span>
              </span>
          <span className="col-3">
                <a><FontAwesomeIcon color={"darkgray"} icon={faRetweet} /></a><span> {tuititem.retweets}</span>
              </span>
          <span className="col-3">
                <a onClick={() =>
                    toggleLike(tuititem)}><FontAwesomeIcon color={ tuititem.liked ? "red" : "darkgray" } icon={tuititem.liked ? faHeart : faHeart} /></a><span> {tuititem.likes}</span>
              </span>
          <span className="col-3">
                <a><FontAwesomeIcon color={"darkgray"} icon={faShareNodes} /></a><span></span>
              </span>
        </div>
      </>
  );
};

export default TuitItem;