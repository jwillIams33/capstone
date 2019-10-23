import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Hero from "../components/hero"
import { Link } from "gatsby"
import ImgGrid from "../components/imgGrid"
import SectionContent from "../components/sectionContent"
import Header from "../components/header"

import boxStyles from "../components/box.module.css"
import flexboxGrid from "../components/flexboxGrid.module.css"

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue_queen.jpg"
 
import layoutStyles from "../components/layout.module.css"


const bg = {
    backgroundImage: "url(" + redKing + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }


const IndexPage = props => {
  return (
    <div>
      <Header />
      <Hero style ={bg} />
      <SectionContent heading = "STAY COLORFUL" />
      <ImgGrid />
      <Footer />
    </div>
  )
}

export default IndexPage
