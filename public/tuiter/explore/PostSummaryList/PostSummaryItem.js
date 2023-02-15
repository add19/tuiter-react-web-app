const PostSummaryItem = (post) => {
  return (`
    <li class="list-group-item">
      <div class="wd-trending wd-grid-row">
        <div class="wd-grid-two-third">
          <p class="wd-trending-subinfo mb-1" style="color: lightgray">${post.topic}</p>
          <span><b>${post.userName} <i class="fa-solid fa-circle-check ps-1"></i></b></span><span style="color: lightgray; padding: 10px">-  ${post.time}</span>
          <p><b>${post.title}</b></p>
        </div>
        <div class="wd-grid-one-third">
          <img src=${post.image} class="wd-img-config">
        </div>
      </div>
    </li>
  `)
}

export default PostSummaryItem;