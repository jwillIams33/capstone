import React from "react"
import Row from "./grid/row"

import ListItem from "./booking/listItem"

const OptionList = props => {
  const options = props.options
  const listItems = options.map(option => (
    <ListItem key={option.toString()} value={option.toString()} />
  ))
  return (
    <div>
      <Row>
        <label for={props.target}>{props.label}</label>
      </Row>
      <select>{listItems}</select>
    </div>
  )
}

export default OptionList
