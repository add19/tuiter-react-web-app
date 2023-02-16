const NavigationSidebar = (active) => {
  return(`
      <div >
        <ul class="list-group ">
          <a href="#" class="list-group-item "><i class="fab fa-twitter fa-1x "></i></a>
          <a href="../HomeScreen/index.html" class="list-group-item ${active === 'home'? 'active' : ''}"><i class="fa-solid fa-house pe-2"></i><span class="d-none d-xl-inline-block">Home</span></a>
          <a href="../explore/index.html" class="list-group-item ${active === 'explore'? 'active' : '' }"><i class="fa-solid fa-hashtag pe-2"></i> <span class="d-none d-xl-inline-block">Explore</span></a>
          <a href="#" class="list-group-item ${active === 'notifications'? 'active' : '' } "><i class="fa-solid fa-bell pe-2"></i> <span class="d-none d-xl-inline-block">Notifications</span></a>
          <a href="#" class="list-group-item ${active === 'messages'? 'active' : '' }"><i class="fa-solid fa-envelope pe-2"></i> <span class="d-none d-xl-inline-block">Messages</span></a>
          <a href="#" class="list-group-item ${active === 'bookmarks' ? 'active' : '' }"><i class="fa-solid fa-bookmark pe-2"></i> <span class="d-none d-xl-inline-block">Bookmarks</span></a>
          <a href="#" class="list-group-item ${active === 'lists' ? 'active' : '' }"><i class="fa-solid fa-list pe-2"></i> <span class="d-none d-xl-inline-block">Lists</span></a>
          <a href="#" class="list-group-item ${active === 'profile' ? 'active' : '' }"><i class="fa-solid fa-user pe-2"></i> <span class="d-none d-xl-inline-block">Profile</span></a>
          <a href="#" class="list-group-item ${active === 'more' ? 'active' : '' }"><i class="fa-solid fa-ellipsis pe-2"></i> <span class="d-none d-xl-inline-block">More</span></a>
          <a href="#" class="list-group-item border-0 p-0 mt-2"><button type="button" style="width: 100%" class="btn btn-primary rounded-pill">Tweet</button></a>
        </ul>
      </div>
 `);
}
export default NavigationSidebar;