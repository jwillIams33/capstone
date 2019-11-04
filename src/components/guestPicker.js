import React, { useState } from "react"
import Row from "./row"
import ListItem from "./listItem"

const GuestPicker = props => {
  const [numberOfGuests, setNumberOfGuests] = useState("1 Guest")

  localStorage.setItem("numberOfGuests", numberOfGuests)

  const guests = localStorage.getItem("numberOfGuests");

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
      <p>{guests}</p>
    </div>
  )
}

export default GuestPicker
