import React from "react";
import liked from "./liked.png"
import notLiked from "./notLiked.png"


function LikeIcon(props) {
  return (
    <img 
      src={(props.isLiked) ? liked : notLiked} 
      style={{display: "block", margin: "0 auto 0 auto", width: "50%", cursor: "pointer"}}
      onClick={() => props.handleClick(props.info, props.isLiked)}
      alt="likeIcon"/>
      )
}

export default LikeIcon