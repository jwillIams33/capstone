import React, { useState } from "react"
import DatePicker from "react-datepicker"
import flexboxGrid from "./flexboxGrid.module.css"
import Wrapper from "./wrapper"
import Label from "./label"
import Column from "./column"
import Row from "./row"

import "react-datepicker/dist/react-datepicker.css"

const Booking = () => {
  const [startDate, setStartDate] = useState(null)
  return (
    <section>
      <Wrapper>
        <Row>
            <Column>
            <p>Check-In</p>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="mm/dd/yyyy"
          />
            </Column>
            <Column>
            <p>Check Out</p>
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="mm/dd/yyyy"
          />
            </Column>
        </Row>
      </Wrapper>
    </section>
  )
}

export default Booking
