import React, { useState } from "react"
import Row from "./row"
import ListItem from "./listItem"

const RoomPicker = props => {
  const [numberOfRooms, setNumberOfRooms] = useState("1 Room")

  localStorage.setItem("numberOfRooms", numberOfRooms)

  const rooms = localStorage.getItem("numberOfRooms");

  const options = props.options
  const listItems = options.map(option => (
    <ListItem key={option.toString()} value={option.toString()} />
  ))
  return (
    <div>
      <Row>
        <label for={props.target}>{props.label}</label>
      </Row>
      <select onChange={event => setNumberOfRooms(event.target.value)}>
        {listItems}
      </select>
      <p>{rooms}</p>
    </div>
  )
}

export default RoomPicker