import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
  from "../../../services/tuits-thunks";


import TuitItem
  from "./tuit-item";


const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  }, [])
  return(
      <ul className="list-group">
        {
          loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          tuits.map((tuititem) =>
              <TuitItem
                  key={tuititem._id} tuititem={tuititem}/>)
        }
      </ul>
  );
};
export default TuitList;