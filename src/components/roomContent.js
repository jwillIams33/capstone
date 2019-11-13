import React from "react"
import Hero from "../components/hero"
import gridTest from "../pages/newgrid.module.css"
import ResponsiveHeader from "../components/example-2"
import RoomList from "../components/roomList"
import imgGen from "../helpers/imgGen"
import { rooms, copy, title } from "../data/content"

const PageContent = props => {
  const color = props.color

  return (
    <>
      <main className={gridTest.container}>
        <ResponsiveHeader />
        <Hero style={imgGen(queen.red)} title={title.red} />
        <BookingSummary />
        <section className={flexboxGrid.roomDetail}>
          <h1>{queen.name}</h1>
          <p>{queen.copy}</p>
        </section>
        <RoomList rooms={rooms[color]} color={color} />
      </main>
    </>
  )
}

export default PageContent
