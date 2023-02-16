const PostSummaryItem = (postitem) => {
  return (`
    <li class="list-group-item b-0 bg-transparent">
        <div class="row align-top">
          <div class="col-1" ><img src=${postitem.avatar} class="rounded-circle" style="width: 40px;" alt="Avatar"/></div>
          <div class="col-10">
            <span><b>${postitem.userName}</b> <i class="fa-solid fa-circle-check ps-1"></i></span> <span style="color: darkgray">${postitem.userHandle}</span>
            <br>
          <span>${postitem.title}</span>
          </div>
          <div class="col-1"><i class="fa-solid fa-ellipsis pe-2"></i></div>
        </div>
        <div class="card ms-5 mt-2 wd-article-card rounded-4">
              <img class="card-img-top rounded-4 " src=${postitem.card_image} alt="Card image cap">
              ${postitem.card_title === '' ? '' : `
                    <div class="card-body">           
                      <h6 class="card-title" style="color: lightgrey">${postitem.card_title}</h6>
                      <p class="card-text" style="color: darkgray">${postitem.card_content}</p>
                    </div>`
              }
        </div>
        <div class="row ms-5 mt-3">
          <span class="col-3">
            <a href="#"><i class="fa-regular fa-comment wd-icon-config"></i></a><span> ${postitem.comments}</span>
          </span>
          <span class="col-3">
            <a href="#"><i class="fa-solid fa-retweet wd-icon-config"></i></a><span> ${postitem.retweets}</span>
          </span>
          <span class="col-3">
            <a class=" wd-likes-red"><i class="fa-solid fa-heart wd-icon-config"></i></a><span> ${postitem.likes}</span>
          </span>
          <span class="col-3">
            <a href="#"><i class="fa-solid fa-arrow-up-from-bracket wd-icon-config"></i></a><span></span>
          </span>
        </div>
    </li>
  `)
}

export default PostSummaryItem;