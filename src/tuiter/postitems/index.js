import React from "react";
import postsArray from './postitems.json';
import PostItem
  from "./post-items";

const PostList = () => {
  return(
      <ul className="list-group">
        {
          postsArray.map(postitem =>
              <PostItem
                  key={postitem._id} postitem={postitem}/> )
        }
      </ul>
  );
};
export default PostList;

