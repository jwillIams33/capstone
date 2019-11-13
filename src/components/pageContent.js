import React from "react"
import gridTest from "../pages/newgrid.module.css"
import ResponsiveHeader from "../components/example-2"
import RoomList from "../components/roomList"
import { rooms, copy, title } from "../data/content"


const PageContent= props => {

    const color = props.color
    
  return (
    <>
    <main className={gridTest.container}>
      <ResponsiveHeader />
      <h1>{title[color]}</h1>
      <p>{copy[color]}</p>
      <RoomList rooms={rooms[color]} color={color} />
    </main>
  </>
  )
}

export default PageContent