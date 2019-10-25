import React from "react"
import Example from "../components/example"
import Footer from "../components/footer"
import Hero from "../components/hero"
import ImgGrid from "../components/imgGrid"
import SectionContent from "../components/sectionContent"
import Header from "../components/header"
import Art from "../components/art"

import flexboxGrid from "../components/flexboxGrid.module.css"

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue_queen.jpg"

import DatePicker from "react-datepicker";
 
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
      
        <Hero style ={bg} title= "Passion Red"  />
        <div className={flexboxGrid.datepicker}>
          <div className={flexboxGrid.dateContainer}><Example /></div>
          <div className={flexboxGrid.dateContainer}><Example /></div>
      
        </div>
        <SectionContent heading = "PASSION RED ROOM" />
        <ImgGrid />
        <Footer />
      </div>
    )
}

export default redPage