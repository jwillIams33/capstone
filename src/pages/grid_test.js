import React from "react"
import gridTest from "./newgrid.module.css"
import ResponsiveHeader from "../components/example-2"
import storage from "../components/storage"

const checkInDate = storage.get("checkInDate")
const checkOutDate = storage.get("checkOutDate")
const rooms = storage.get("numberOfRooms")

const guests = storage.get("numberOfGuests")

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
