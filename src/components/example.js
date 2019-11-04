import React, { useState } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Row from "./row"

import "react-datepicker/dist/react-datepicker.css"
import { subDays } from "date-fns"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ChooseDate = props => {
  const [startDate, setStartDate] = useState(new Date())

  function getFormattedDate(date) {
    let formattedDate = date.toDateString()

    return formattedDate
  }

  const formattedDate = getFormattedDate(startDate)

  localStorage.setItem("CheckInDate", formattedDate)

  const checkInDate = localStorage.getItem("CheckInDate")

  return (
    <div>
      <Row>
        <label>{props.label}</label>
      </Row>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="mm/dd/yyyy"
        minDate={subDays(new Date(), 0)}
        className={flexboxGrid.custom}
      />
      <p><b>Check-In:</b> {checkInDate}</p>
    </div>
  )
}

export default ChooseDate
