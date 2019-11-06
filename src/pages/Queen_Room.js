import React from "react"
import ChooseDate from "../components/example"
import CheckOutDatePicker from "../components/checkOut"
import Footer from "../components/footer"
import Hero from "../components/hero"
import RoomGrid from "../components/RoomGrid"
import SectionContent from "../components/sectionContent"
import Header from "../components/header"
import Art from "../components/art"
import Rooms from "../data/rooms"
import Row from "../components/row"
import Wrapper from "../components/wrapper"
import GuestPicker from "../components/guestPicker"
import RoomPicker from "../components/roomPicker"

import storage from "../components/storage"


import red from '../images/pageData'

import "react-datepicker/dist/react-datepicker.css"

function imgGen(img){
    let bg = {
      backgroundImage: "url(" + img + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    }
    return bg
  }

  const checkInDate = storage.get("checkInDate")
const checkOutDate = storage.get("checkOutDate")
const rooms = storage.get("numberOfRooms")

const guests = storage.get("numberOfGuests")

const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests"]
const roomOptions = ["1 Room", "2 Rooms", "3 Rooms", "4 Rooms"]

const queenRoom = () => {
  return (
    <div>
      <Header />

      <Hero style={imgGen(red.queen)} title={Rooms.colors.red} />

      <Wrapper>
          <Row>
              <p>CHECK-IN: {checkInDate}</p><p>CHECK OUT: {checkOutDate}</p><p>GUESTS: {guests}</p><p>ROOMS: {rooms}</p>
          </Row>
      </Wrapper>
        <h1>Queen Room</h1>
        <section>Content</section>
      <Footer />
    </div>
  )
}

export default queenRoom
