import React, { useState } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Row from "./row"

import "react-datepicker/dist/react-datepicker.css"
import { subDays } from "date-fns"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const CheckOutDatePicker = props => {
  const [endDate, setEndDate] = useState(tomorrow)

  function formatDate(date) {
    let formattedDate = date.toDateString()

    return formattedDate
  }

  const formattedDate = formatDate(endDate)

  localStorage.setItem("CheckOutDate", formattedDate)

  const checkOutDate = localStorage.getItem("CheckOutDate")

  return (
    <div>
      <Row>
        <label>{props.label}</label>
      </Row>
      <DatePicker
        selected={endDate}
        onChange={date => setEndDate(date)}
        placeholderText="mm/dd/yyyy"
        minDate={subDays(new Date(), 0)}
        className={flexboxGrid.custom}
      />
      <p>
        <b>Check-Out:</b>
        {checkOutDate}
      </p>
    </div>
  )
}

export default CheckOutDatePicker
