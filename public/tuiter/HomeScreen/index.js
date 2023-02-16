import NavigationSidebar from "../explore/NavigationSidebar/index.js";
import PostSummaryList from "../explore/PostSummaryList/index.js";
import PostItem from "../PostList/index.js";

function exploreComponent() {
  $('#wd-home-screen').append(`
     <div class="mt-2 col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
        ${NavigationSidebar('home')}
     </div>
     <div class="mt-2 col-xxl-6 col-xl-7 col-lg-7 col-md-10 col-sm-10">
        ${PostItem()}
     </div>
     <div class="mt-2 col-xxl-4 col-xl-3 col-lg-4 d-none d-lg-block"">  
      ${PostSummaryList()}
     </div>
   `);
}

$(exploreComponent);
