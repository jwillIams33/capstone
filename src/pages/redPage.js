import React from "react"
import Example from "../components/example"
import Footer from "../components/footer"
import Hero from "../components/hero"
import ImgGrid from "../components/imgGrid"
import SectionContent from "../components/sectionContent"
import Header from "../components/header"
import Art from "../components/art"
import Rooms from "../data/rooms"

import flexboxGrid from "../components/flexboxGrid.module.css"

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue_queen.jpg"

import DatePicker from "react-datepicker"

import Booking from "../components/booking"
 
import "react-datepicker/dist/react-datepicker.css";

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
      
        <Hero style ={bg} title= {Rooms.colors.red}  />
        {/* <Booking /> */}
        <div className={flexboxGrid.datepicker}>
          <div className={flexboxGrid.dateContainer}>
            {/* <p>Check-In</p> */}
            <Example />
          </div>
          <div className={flexboxGrid.dateContainer}><Example /></div>
          <div className={flexboxGrid.dateContainer}>
            <select>
  <option value="volvo">1 Guest</option>
  <option value="saab">2 Guests</option>
  <option value="opel">3 Guests</option>
  <option value="audi">4 Guests</option>
</select>
<select>
  <option value="volvo">1 Room</option>
  <option value="saab">2 Rooms</option>
  <option value="opel">3 Rooms</option>
  <option value="audi">4 Rooms</option>
</select>
</div>
      
        </div>
        <SectionContent heading = {Rooms.colors.red} />
        <ImgGrid />
        <Footer />
      </div>
    )
}

export default redPage