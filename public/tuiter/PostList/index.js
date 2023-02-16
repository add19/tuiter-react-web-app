import postitems from "./postitems.js"
import PostListItem from "./PostListItem.js"

function PostItem() {
  return (`
      <ul class="list-group list-group-flush">
        ${postitems.map(post => {
          return(PostListItem(post))
        }).join('')
      }
     </ul>
  `)
}

export default PostItem;