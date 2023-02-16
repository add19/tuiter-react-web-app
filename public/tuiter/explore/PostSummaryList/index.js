import posts from "./posts.js"
import PostSummaryItem from "./PostSummaryItem.js"

function PostSummaryList() {
  return (`

      <ul class="list-group list-group-flush">
      ${posts.map(post => {
          return(PostSummaryItem(post))
        }).join('')
      }
     </ul>
  `)
}

export default PostSummaryList;