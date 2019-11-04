import React from "react"
import gridTest from "./newgrid.module.css"
import ResponsiveHeader from "../components/example-2"

const checkInDate = localStorage.getItem("CheckInDate")
const checkOutDate = localStorage.getItem("CheckOutDate")
const rooms = localStorage.getItem("numberOfRooms")

const guests = localStorage.getItem("numberOfGuests")

const greenPage = () => {
  return (
    <>
      <ResponsiveHeader />
      <h2>Stay Summary</h2>
      <p>Check-In: {checkInDate}</p>
      <p>Check Out: {checkOutDate}</p>
      <p>{rooms}</p>
      <p>{guests}</p>
    </>
  )
}

export default greenPage
