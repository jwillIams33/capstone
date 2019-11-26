import React from "react"
import gridTest from "../../pages/newgrid.module.css"
import ResponsiveHeader from "./responsiveHeader"
import RoomList from "./roomList"
import Hero from "./hero"
import imgGen from "../../helpers/imgGen"
import { rooms, copy, title, art } from "../../data/content"


const PageContent= props => {
    
    const color = props.color
    const getArt = art[color]
    
  return (
    <>
    <main>
      <ResponsiveHeader />
      <Hero style={imgGen(getArt)} className={gridTest.roomImage}/>
      <h1 className={gridTest.headlineAlt}>{title[color]}</h1>
      <p>{copy[color]}</p>
      <RoomList rooms={rooms[color]} color={color} />
    </main>
  </>
  )
}

export default PageContent