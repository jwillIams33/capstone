import React from "react"
import gridTest from "./newgrid.module.css"
import ResponsiveHeader from "../components/example-2"
import RoomList from "../components/roomList"
import storage from "../components/storage"
import { rooms, copy, title } from "../data/content"

const color = "blue"

// const checkInDate = storage.get("checkInDate")
// const checkOutDate = storage.get("checkOutDate")
// const guests = storage.get("numberOfGuests")

const greenPage = () => {
  return (
    <>
      <ResponsiveHeader />
      <h1>{title[color]}</h1>
      <p>{copy[color]}</p>
      <RoomList rooms={rooms[color]} color={color} />
    </>
  )
}

export default greenPage
