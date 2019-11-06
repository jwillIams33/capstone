import React from "react"
import ChooseDate from "../components/example"
import CheckOutDatePicker from "../components/checkOut"
import Footer from "../components/footer"
import Hero from "../components/hero"
import ImgGrid from "../components/imgGrid"
import SectionContent from "../components/sectionContent"
import Header from "../components/header"
import Art from "../components/art"
import Rooms from "../data/rooms"
import Row from "../components/row"
import Wrapper from "../components/wrapper"
import GuestPicker from "../components/guestPicker"
import RoomPicker from "../components/roomPicker"

import "react-datepicker/dist/react-datepicker.css"

const bg = {
  backgroundImage: "url(" + Art.passionRed + ")",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests"]
const roomOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms"]

const redPage = () => {
  return (
    <div>
      <Header />

      <Hero style={bg} title={Rooms.colors.red} />

      <Wrapper>
        <Row>
          <ChooseDate label="Check-In" />
          <CheckOutDatePicker label="Check Out" />
          <GuestPicker label="Guests" options={guestOptions} />
          <RoomPicker label="Rooms" options={roomOptions} />
        </Row>
      </Wrapper>

      <SectionContent heading={Rooms.colors.red} />
      <ImgGrid />
      <Footer />
    </div>
  )
}

export default redPage
