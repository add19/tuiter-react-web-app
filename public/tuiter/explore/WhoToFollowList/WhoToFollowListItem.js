function WhoToFollowListItem(who) {
  return (`
           <li class="list-group-item  ">
            <div class="row align-items-center">
              <div class="col-2"><img src=${who.avatarIcon} style="width: 48px; height: 48px; border-radius: 10px"></div>
              <div class="col-7"><span><b>${who.userName}</b> <i class="fa-solid fa-circle-check ps-1"></i></span><br><span>${who.handle}</span></div>
              <div class="col-3 p-0"><span class=" bg-primary rounded-pill"><button type="button" class="btn btn-primary" style="border-radius: 30px">Follow</button></span></div>
            </div>
          </li>
  `)
}

export default WhoToFollowListItem;