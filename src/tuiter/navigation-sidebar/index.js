import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')

  const active = paths[2];
  console.log(active);
  console.log(pathname);
  return (
      <div className="list-group">
        <a className="list-group-item" href={"#"}>Tuiter</a>
        <Link to="/tuiter" className={`list-group-item
                    ${(active === undefined || active === '')?'active':''}`} href={"#"}>
          Home
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`} href={"#"}>
          Explore
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href={"#"}>
          Notifications
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'messages'?'active':''}`} href={"#"}>
          Messages
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}  href={"#"}>
          Bookmarks
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'lists'?'active':''}`} href={"#"}>
          Lists
        </Link>
        <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile' || active === 'edit-profile'?'active':''}`} href={"#"}>
          Profile
        </Link>
        <Link to="/" className={`list-group-item
                    ${active === 'more'?'active':''}`} href={"#"}>
          More
        </Link>
      </div>
  );
};

export default NavigationSidebar;