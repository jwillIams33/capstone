import React from "react"
import gridTest from "../../pages/newgrid.module.css"
import ResponsiveHeader from "./responsiveHeader"
import RoomList from "./roomList"
import Hero from "./hero"
import imgGen from "../../helpers/imgGen"
import heroGen from "../../helpers/heroGen"
import Booking from "./booking"
import Footer from "./footer"
import { rooms, copy, title, art } from "../../data/content"

const PageContent = props => {
  const color = props.color
  const getArt = art[color]

  return (
    <>
      <main>
        <ResponsiveHeader />
        <Hero
          style={heroGen(getArt)}
          className={gridTest.roomImage}
          title={title[color]}
        />
        <Booking />
        <section className={gridTest.container}>
          <p className={gridTest.bodyText}>{copy[color]}</p>
        </section>
        <RoomList rooms={rooms[color]} color={color} />
        <Footer />
      </main>
    </>
  )
}

export default PageContent
