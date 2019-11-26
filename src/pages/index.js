import React from "react"
import Footer from "../components/layout/footer"
import Hero from "../components/layout/hero"
import SectionContent from "../components/layout/sectionContent"
import redKing from "../images/red/red_king.jpg"
import ColorList from "../components/layout/colorList"
import ResponsiveHeader from "../components/layout/responsiveHeader"
import { mainHero } from "../data/content"
import gridTest from "./newgrid.module.css"
import heroGen from "../helpers/heroGen"

const redKingImg = "url(" + mainHero + ")";

const bg = {
    backgroundImage: redKingImg,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    // height: "100%",
    overflow: "hidden",
  }


const IndexPage = props => {
  return (
    <div>
      <ResponsiveHeader />
      <Hero style ={heroGen(mainHero)} className={gridTest.roomImage} title="Stay Colorful"/>
      <SectionContent />
      <ColorList />
      <Footer />
    </div>
  )
}

export default IndexPage
