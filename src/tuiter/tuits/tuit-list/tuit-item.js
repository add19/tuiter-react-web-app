import {
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import TuitStatItem
  from "../tuit-stats/tuit-stat-rep";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

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
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  console.log(tuititem)
  return (
      <li className="list-group-item b-0 bg-transparent">
        <div className="row align-top">
          <div className="col-1"><img src={`/images/${tuititem.avatar}`}
                                      className="rounded-circle"
                                      width={40} alt="Avatar"/>
          </div>

          <div className="col-10">
            <span><b>{tuititem.userName}</b> <FontAwesomeIcon className={"wd-twitter-button"} icon={faCheckCircle} /></span>  <span className={"wd-time-handle-color"}>{tuititem.userHandle} .</span> <span className={"wd-time-handle-color"}>{tuititem.time}</span>
            <br/>
            <span>{tuititem.tweet}</span>
          </div>
          <div className="col-1">
            <i className="fa-solid fa-ellipsis pe-2"></i>
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuititem._id)}></i>
          </div>
        </div>
          <TuitStatItem
            key={tuititem._id} tuititem={tuititem}/>
      </li>
  );
};

export default TuitItem;