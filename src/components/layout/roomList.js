import React from "react"
import { Link } from "gatsby"
import gridTest from "../../pages/newgrid.module.css"
import flexboxGrid from "../flexboxGrid.module.css"
import imgGen from "../../helpers/imgGen"

const RoomList = props => {
  const color = props.color

  const content = props.rooms.map(room => (
    <div className={gridTest.roomItem}>
      <div style={imgGen(room[color])} className={gridTest.roomImage}>
        <Link className={flexboxGrid.linkStyles} to={`/${room.url[color]}`} state={color} >
          {room.name}
        </Link>
      </div>
      <div className={gridTest.row}>
        <p className={gridTest.roomName}>{room.name}</p>
        <p className={gridTest.roomPrice}>
          {room.price}
          <span>/night</span>
        </p>
      </div>
    </div>
  ))

  return (
    <>
      <div className={gridTest.roomRow}>{content}</div>
    </>
  )
}

export default RoomList
