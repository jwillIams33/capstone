import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Row from "./row"
import storage from "./storage"

import "react-datepicker/dist/react-datepicker.css"
import { subDays } from "date-fns"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const CheckOutDatePicker = props => {

  
    const [checkOutDate, setCheckOutDate] = useState(tomorrow) 


  function getFormattedDate(date) {
    let formattedDate = date.toDateString()

    return formattedDate
  }

  const formattedDate = getFormattedDate(checkOutDate)


  storage.set("checkOutDate", formattedDate)

  const checkOut = storage.get("checkOutDate")

  


  
//   useEffect(() => {
//       localStorage.setItem('checkOutDate', endDate);
//     }, [endDate]);

// useEffect(() => {
//     setEndDate(localStorage.getItem('checkOutDate'))
//   }, [])
    


// const [endDate, setEndDate] = useState(
//     localStorage.getItem('checkOutDate') 
 
// )




//   const formattedDate = formatDate(endDate)

//   localStorage.setItem("checkOutDate", endDate)

//   const checkOutDate = localStorage.getItem("CheckOutDate")

  return (
    <div>
      <Row>
        <label>{props.label}</label>
      </Row>
      <DatePicker
        selected={checkOutDate}
        onChange={date => setCheckOutDate(date)}
        placeholderText="mm/dd/yyyy"
        minDate={subDays(new Date(), 0)}
        className={flexboxGrid.custom}
      />
      <p>
       {checkOut}
      </p>
    </div>
  )
}

export default CheckOutDatePicker
