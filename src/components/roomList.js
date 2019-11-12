import React from "react"
import RoomItem from "./roomItem"
import Row from "./row"
import RoomPrice from "./roomPrice"
import RoomImage from "./roomImage"
import Link from 'gatsby'
import ImgContainer from "./imgContainer"
import { rooms } from "../data/content"

function imgGen(img) {
  let bg = {
    backgroundImage: "url(" + img + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "400px",
    height: "200px",
    overflow: "hidden",
  }
  return bg
}

const RoomList = props => {
  const color = props.color

  const content = props.rooms.map(room => (
    <div>
      <div style={imgGen(room[color])}></div>
      <p>{room.name}</p>
      <p>{room.price}</p>
      {/* <Link to={room.url[color]}></Link> */}
    
    </div>
  ))

  return <div>{content}</div>
}

export default RoomList
