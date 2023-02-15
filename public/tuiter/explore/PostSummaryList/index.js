import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js"

function PostSummaryList() {
  return (`
  <div class="card bg-dark text-white mt-2">
    <img class="card-img" src="spacex.webp" alt="Card image">
      <div class="card-img-overlay">
        <h1 class="card-title" style="margin-top: 60%;">SpaceX's Starship</h1>
      </div>
      <ul class="list-group list-group-flush">
      ${posts.map(post => {
          return(PostSummaryItem(post))
        }).join('')
      }
     </ul>
     </div>
  `)
}

export default PostSummaryList;