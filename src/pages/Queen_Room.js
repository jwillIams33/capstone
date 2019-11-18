import React from "react"
import Footer from "../components/layout/footer"
import Hero from "../components/layout/hero"
import Header from "../components/layout/header"
import Row from "../components/grid/row"
import Wrapper from "../components/grid/wrapper"
import Column from "../components/grid/column"

import storage from "../components/storage"

import flexboxGrid from "../components/flexboxGrid.module.css"

import {
  queen,
  title
} from "../data/content"

function imgGen(img) {
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

      <Hero style={imgGen(queen.red)} title={title.red} />

      <Wrapper>
        <Row>
          <Column>
            <p>CHECK-IN:</p>
            <Row>
              <p>{checkInDate}</p>
            </Row>
          </Column>
          <Column>
            <p>CHECK-OUT:</p>
            <Row>
              <p>{checkOutDate}</p>
            </Row>
          </Column>
          <Column>
            <p>GUESTS:</p>
            <Row>
              <p>{guests}</p>
            </Row>
          </Column>
          <Column>
            <p>ROOMS:</p>
            <Row>
              <p>{rooms}</p>
            </Row>
          </Column>
          <Column>
            <button>Select</button>
          </Column>
        </Row>
        <section className={flexboxGrid.roomDetail}>
          <h1>{queen.name}</h1>
          <p>{queen.copy}</p>
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

export default queenRoom
