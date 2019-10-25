import React, { useState } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Column from "./column"


import "react-datepicker/dist/react-datepicker.css"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Example = () => {
  const [startDate, setStartDate] = useState(null)
  return (
    <Column>
                <DatePicker 
    selected={startDate} 
    onChange={date => setStartDate(date)}
    placeholderText="mm/dd/yyyy"
     />
    </Column>
   
  )
}

export default Example
