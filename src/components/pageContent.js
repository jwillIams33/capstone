import React from "react"
import gridTest from "../pages/newgrid.module.css"
import ResponsiveHeader from "./layout/responsiveHeader"
import RoomList from "../components/roomList"
import { rooms, copy, title } from "../data/content"


const PageContent= props => {
    
    const color = props.color
    
  return (
    <>
    <main>
      <ResponsiveHeader />
      <h1 className={gridTest.headlineAlt}>{title[color]}</h1>
      <p>{copy[color]}</p>
      <RoomList rooms={rooms[color]} color={color} />
    </main>
  </>
  )
}

export default PageContent