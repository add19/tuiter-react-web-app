import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js"

const WhoToFollowList = () => {
  return (`
      <div>
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <h6 class="mb-0"><b>Who to Follow</b></h6>
          </li>
            ${who.map(w => {
              return(WhoToFollowListItem(w));  
            }).join('')
          }
        </ul>
      </div>
  `)
}

export default WhoToFollowList;