import React from 'react'
import LikeIcon from '../likeIcon/likeIcon.js'
import {Card,Media} from 'reactstrap'

function CardItem(props) {
  return(
    <Card style={{padding : "5px"}}>
      <Media>
        <Media left >
          <img src={props.item.artwork} alt="pic" style={{marginRight : "1em"}}/>
        </Media>
        <Media body>
          <Media heading>
            {props.item.name}
          </Media>
          <p>{props.item.genre}</p>
          <a href={props.item.url}>iTunes link</a>
        </Media>
        <Media right>
          <LikeIcon isLiked={props.item.isLiked} handleClick={props.likeCallback} info={props.item}/>
        </Media>
      </Media>
    </Card>
  )
}

export default CardItem;