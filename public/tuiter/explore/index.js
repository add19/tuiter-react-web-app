import NavigationSidebar from "./NavigationSidebar/index.js";
import WhoToFollowList from "./WhoToFollowList/index.js";
import ExploreScreen from "./ExploreScreen/index.js";

function exploreComponent() {
  $('#wd-explore').append(`
     <div class="mt-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        ${NavigationSidebar()}
     </div>
     <div class="mt-2 col-xxl-7 col-xl-7 col-lg-7 col-md-10 col-sm-10">
       ${ExploreScreen()}
     </div>
     <div class="mt-2 col-xxl-3 col-xl-3 col-lg-4 d-none d-lg-block">  
      ${WhoToFollowList()}
     </div>
   `);
}

$(exploreComponent);

