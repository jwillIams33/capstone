import React from "react"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Header from "../components/header"
import Rooms from "../data/rooms"
import Row from "../components/row"
import Wrapper from "../components/wrapper"

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
