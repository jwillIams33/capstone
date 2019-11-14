import React from "react"
import ChooseDate from "../components/example"
import CheckOutDatePicker from "../components/booking/checkOut"
import Footer from "../components/layout/footer"
import RoomGrid from "../components/RoomGrid"
import Header from "../components/layout/header"
import Row from "../components/grid/row"
import Wrapper from "../components/grid/wrapper"
import GuestPicker from "../components/booking/guestPicker"
import RoomPicker from "../components/booking/roomPicker"

import "react-datepicker/dist/react-datepicker.css"



const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests"]
const roomOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms"]

const redPage = () => {
  return (
    <div>
      <Header />
{/* 
      <Hero style={bg} title={Rooms.colors.red} /> */}

      <Wrapper>
        <Row>
          <ChooseDate label="Check-In" />
          <CheckOutDatePicker label="Check Out" />
          <GuestPicker label="Guests" options={guestOptions} />
          <RoomPicker label="Rooms" options={roomOptions} />
        </Row>
      </Wrapper>

      {/* <SectionContent heading={Rooms.colors.red} /> */}
      <RoomGrid />
      <Footer />
    </div>
  )
}

export default redPage
