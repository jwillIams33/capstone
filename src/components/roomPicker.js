import React, { useState, useEffect } from "react"
import Row from "./row"
import ListItem from "./listItem"
import storage from "./storage"

// const storage = (localStorage) ? localStorage: {};

const RoomPicker = props => {
  const [numberOfRooms, setNumberOfRooms] = useState("1 Room")

//   React.useEffect(() => {
//     localStorage.setItem('numberOfRooms', numberOfRooms);
//   }, [numberOfRooms]);

storage.set("numberOfRooms", numberOfRooms)

const rooms = storage.get("numberOfRooms")


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