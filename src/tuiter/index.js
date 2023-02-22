// import Nav from "../nav";
// import NavigationSidebar
//   from "./navigation-sidebar";
// import WhoToFollowListItem
//   from "./who-to-follow-list/who-to-follow-list-item";
// import PostSummaryItem
//   from "./post-summary-list/post-summary-item";
// import Explore from "./explore";
//
// function Tuiter() {
//   return (
//       <div>
//         <Nav/>
//         <NavigationSidebar/>
//         <WhoToFollowListItem who={{
//           userName: 'NASA', handle: 'NASA',
//           avatarIcon: 'java.png',
//         }}/>
//         <WhoToFollowListItem who={{
//           userName: 'Tesla', handle: 'tesla',
//           avatarIcon: 'nodejs.png',
//         }}/>
//         <WhoToFollowListItem who={{
//           userName: 'SpaceX', handle: 'SpaceX',
//           avatarIcon: 'js.png',
//         }}/>
//         <PostSummaryItem who={{
//           topic: "Space",
//           userName: "SpaceX",
//           time: "2h",
//           title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
//           image: "java.png"
//         }}/>
//         <Explore/>
//         <h1>Tuiter</h1>
//       </div>
//   )
// }
// export default Tuiter
import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
  return (
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <ExploreComponent/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
  );
}

export default Tuiter


