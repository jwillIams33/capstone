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
import Column from "../components/column"
import Wrapper from "../components/wrapper"
import OptionList from "../components/select"

import flexboxGrid from "../components/flexboxGrid.module.css"

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue_queen.jpg"

import DatePicker from "react-datepicker"

import Booking from "../components/booking"

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

const guestOptions = ["1 guest", "2 guests", "3 guests", "4 guests"]
const roomOptions = ["1 room", "2 rooms", "3 rooms", "4 rooms"]

const redPage = () => {
  return (
    <div>
      <Header />

      <Hero style={bg} title={Rooms.colors.red} />

      <Wrapper>
        <Row>
          <ChooseDate label="Check-In" />
          <CheckOutDatePicker label="Check Out" />
          {/* <ChooseDate label="Check-Out" /> */}
          <OptionList label="Guests" options={guestOptions} />
          <OptionList label="Rooms" options={roomOptions} />
        </Row>
      </Wrapper>

      <SectionContent heading={Rooms.colors.red} />
      <ImgGrid />
      <Footer />
    </div>
  )
}

export default redPage
