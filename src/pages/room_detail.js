import React from "react"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Header from "../components/header"
import Row from "../components/row"
import Wrapper from "../components/wrapper"
import Column from "../components/column"
import BookingSummary from "../components/bookingSummary"
import flexboxGrid from "../components/flexboxGrid.module.css"
import imgGen from "../helpers/imgGen"
import gridTest from "../pages/newgrid.module.css"


const RoomDetail = ({location}) => {
  return (
    <div>
      <Header />

      <Hero style={imgGen(location.state.img)} className={gridTest.roomImage}/>

      <Wrapper>
        <BookingSummary />
        <section className={flexboxGrid.roomDetail}>
          <h1>{location.state.name}</h1>
          <p>{location.state.copy}</p>
        </section>

        <section className={flexboxGrid.roomDetail}>
          <h2>Features:</h2>
          <Row>
            <ul>
              <li>High Speed Internet</li>
              <li>Kuerig coffee/tea maker</li>
              <li>minibar</li>
            </ul>
            <ul>
              <li>Work Desk</li>
              <li>Bluetooth Speakers</li>
              <li>Direct TV</li>
            </ul>
            <ul>
              <li>In-Room Safe</li>
              <li>Valet Parking</li>
              <li>Cups/glassware</li>
            </ul>
          </Row>
        </section>
      </Wrapper>
      <Footer />
    </div>
  )
}

export default RoomDetail
