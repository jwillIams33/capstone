import React, { useState } from "react"
import Row from "../grid/row"
import ListItem from "./listItem"
import storage from "../storage"

const GuestPicker = props => {
  const [numberOfGuests, setNumberOfGuests] = useState("1 Guest")

  storage.set("numberOfGuests", numberOfGuests)
  
  const options = props.options
  
  const listItems = options.map(option => (
    <ListItem key={option.toString()} value={option.toString()} />
  ))
  return (
    <div>
      <Row>
        <label for={props.target}>{props.label}</label>
      </Row>
      <select onChange={event => setNumberOfGuests(event.target.value)}>
        {listItems}
      </select>
    </div>
  )
}

export default GuestPicker
