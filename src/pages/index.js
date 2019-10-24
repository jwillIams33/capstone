import React from "react"
import Footer from "../components/footer"
import Hero from "../components/hero"
import ImgGrid from "../components/imgGrid"
import SectionContent from "../components/sectionContent"
import Header from "../components/header"
import Img from "../components/img"
import yellowKing from "../images/yellow/yellow-3.jpg"
import redKing from "../images/red/red_king.jpg"
 


const bg = {
    backgroundImage: "url(" + redKing + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }

  const bg3 = {
    backgroundImage: "url(" + yellowKing + ")",
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
      <Img style={bg3} name = "yellow room" link = {"/yellowPage"} />
      <Footer />
    </div>
  )
}

export default IndexPage
