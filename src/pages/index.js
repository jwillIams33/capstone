import React from "react"
import Footer from "../components/footer"
import Hero from "../components/hero"
import SectionContent from "../components/sectionContent"
import redKing from "../images/red/red_king.jpg"
import ColorList from "../components/colorList"
import ResponsiveHeader from "../components/example-2"

const redKingImg = "url(" + redKing + ")";

const bg = {
    backgroundImage: redKingImg,
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
      <ResponsiveHeader />
      <Hero style ={bg} />
      <SectionContent heading = "STAY COLORFUL" />
      <ColorList />
      <Footer />
    </div>
  )
}

export default IndexPage
