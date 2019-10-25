import React from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Column from "./column"
import Row from "./row"

import ListItem from "./listItem"

const OptionList = props => {
  const options = props.options
  const listItems = options.map(option => (
    <ListItem key={option.toString()} value={option} />
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
