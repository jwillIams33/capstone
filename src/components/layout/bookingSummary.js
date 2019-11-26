import React from "react"
import gridTest from "../../pages/newgrid.module.css"
import Row from "../grid/row"
import Column from "../grid/column"
import storage from "../storage"

const checkInDate = storage.get("checkInDate")
const checkOutDate = storage.get("checkOutDate")
const rooms = storage.get("numberOfRooms")
const guests = storage.get("numberOfGuests")

const BookingSummary = () => {

  const style = {
    paddingTop: "20px"
  }
  return (
    <>
      <main style={style} className={gridTest.container}>
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
      </main>
    </>
  )
}

export default BookingSummary