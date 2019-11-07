import React, { useState } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Row from "./row"

import storage from "./storage"

import "react-datepicker/dist/react-datepicker.css"
import { subDays } from "date-fns"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ChooseDate = props => {
  const [checkInDate, setCheckInDate] = useState(new Date())

  function getFormattedDate(date) {
    let formattedDate = date.toDateString()

    return formattedDate
  }

  const formattedDate = getFormattedDate(checkInDate)


  storage.set("checkInDate", formattedDate)

  const checkIn = storage.get("checkInDate")

  return (
    <div>
      <Row>
        <label>{props.label}</label>
      </Row>
      <DatePicker
        selected={checkInDate}
        onChange={date => setCheckInDate(date)}
        placeholderText="mm/dd/yyyy"
        minDate={subDays(new Date(), 0)}
        className={flexboxGrid.custom}
      />
    </div>
  )
}

export default ChooseDate
