import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a className="list-group-item" href={"#"}>Tuiter</a>
        <a className={`list-group-item
                    ${active === 'home'?'active':''}`} href={"#"}>
          Home
        </a>
        <a className={`list-group-item
                    ${active === 'explore'?'active':''}`} href={"#"}>
          Explore
        </a>
        <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`} href={"#"}>
          Notifications
        </a>
        <a className={`list-group-item
                    ${active === 'messages'?'active':''}`} href={"#"}>
          Messages
        </a>
        <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}  href={"#"}>
          Bookmarks
        </a>
        <a className={`list-group-item
                    ${active === 'lists'?'active':''}`} href={"#"}>
          Lists
        </a>
        <a className={`list-group-item
                    ${active === 'profile'?'active':''}`} href={"#"}>
          Profile
        </a>
        <a className={`list-group-item
                    ${active === 'more'?'active':''}`} href={"#"}>
          More
        </a>
      </div>
  );
};

export default NavigationSidebar;