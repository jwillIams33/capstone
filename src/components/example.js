import React, { useState } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Column from "./column"
import Row from "./row"

import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ChooseDate = props => {
  const [startDate, setStartDate] = useState(null)
  return (
    <div>
      <Row>
        <label>{props.label}</label>
      </Row>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="mm/dd/yyyy"
      />
    </div>
  )
}

export default ChooseDate
