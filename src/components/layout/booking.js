import React, { useState } from "react"
import DatePicker from "react-datepicker"
import Wrapper from "../grid/wrapper"
import Column from "../grid/column"
import Row from "../grid/row"
import GuestPicker from "../booking/guestPicker"
import RoomPicker from "../booking/roomPicker"
import {guestOptions, roomOptions} from "../../data/content"

import "react-datepicker/dist/react-datepicker.css"
import CheckOutDatePicker from "../booking/checkOut"
import ChooseDate from "../booking/check-in"

const Booking = () => {
  const [startDate, setStartDate] = useState(null)

  const style = {
    paddingTop: "15px"
  }

  const style2 = {
    paddingTop: "20px"
  }
  return (
    <section style={style2}>
      <Wrapper>
        <Row>
            <Column>
            <p style={style}>Check-In</p>
          <ChooseDate
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="mm/dd/yyyy"
          />
            </Column>
            <Column>
            <p style={style}>Check Out</p>
          <CheckOutDatePicker
            selected={startDate}
            onChange={date => setStartDate(date)}
            placeholderText="mm/dd/yyyy"
          />
            </Column>
            <Column>
            <p style={style}>Guests</p>
            <GuestPicker options={guestOptions} />
            </Column>
            <Column>
            <p style={style}>Rooms</p>
            <RoomPicker options={roomOptions} />
            </Column>
        </Row>
      </Wrapper>
    </section>
  )
}

export default Booking
