import React from "react"
import Footer from "../components/layout/footer"
import Hero from "../components/hero"
import Header from "../components/layout/header"
import Row from "../components/grid/row"
import Wrapper from "../components/grid/wrapper"
import BookingSummary from "../components/layout/bookingSummary"
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
          <h1 className={gridTest.headline}>{location.state.name}</h1>
          <p>{location.state.copy}</p>
        </section>

        <section className={flexboxGrid.roomDetail}>
          <h2 className={gridTest.subhead}>Features:</h2>
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
