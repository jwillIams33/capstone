import React from "react"
import ChooseDate from "../components/example"
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

const redPage = () => {
  return (
    <div>
      <Header />

      <Hero style={bg} title={Rooms.colors.red} />

      <Wrapper>
        <Row>
          <ChooseDate label="Check-In" />
          <ChooseDate label="Check-Out" />
          <ChooseDate label="Check-In" />
          <ChooseDate label="Check-Out" />
          <ChooseDate label="Check-Out" />
        </Row>

        {/* <div className={flexboxGrid.dateContainer}>
          <Row>
            <label for="pet-select">Guests</label>
          </Row>

          <select name="pets" className={flexboxGrid.guests}>
            <option value="">1 Guest</option>
            <option value="dog">2 Guests</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div className={flexboxGrid.dateContainer}>
          <Row>
            <label for="pet-select">Rooms</label>
          </Row>

          <select name="pets" className={flexboxGrid.guests}>
            <option value="">1 Room</option>
            <option value="dog">2 Rooms</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="goldfish">Goldfish</option>
          </select>
        </div>
        <div className={flexboxGrid.dateContainer}>
          <button>Check Availability</button>
        </div> */}
      </Wrapper>

      <SectionContent heading={Rooms.colors.red} />
      <ImgGrid />
      <Footer />
    </div>
  )
}

export default redPage
