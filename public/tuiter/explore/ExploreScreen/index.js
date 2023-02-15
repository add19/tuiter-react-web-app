import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
      <div class="row">
        <div class="col-11">
          <div class="input-group mb-3 border rounded-pill">
            <span class="input-group-text bg-transparent border-0" id="basic-addon1"><i class="fa fa-search p-1"></i></span>
            <input type="text" class="form-control ps-0 border-0 bg-transparent" placeholder="Search" aria-label="Search" aria-describedby="basic-addon1">
          </div>
        </div>
        <div class="col-1 pt-1">
          <div><i class="fa-solid fa-gear text-primary fa-2x"></i></div>
        </div>
      </div>

        <div>
          <ul class="mt-2 nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-block">
              <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
          </ul>
        </div>
       <!-- image with overlaid text -->
       ${PostSummaryList()}
    `);
}
export default ExploreComponent;
