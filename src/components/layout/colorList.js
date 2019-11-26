import React from "react"
import { Link } from "gatsby"
import gridTest from "../../pages/newgrid.module.css"
import flexboxGrid from "../flexboxGrid.module.css"
import imgGen from "../../helpers/imgGen"
import { king } from "../../data/content"

const {
  red: redImage,
  blue: blueImage,
  green: greenImage,
  yellow: yellowImage,
} = king

const red = {
  img: redImage,
  state: "red",
  name: "Passion Red",
  link: "/Passion",
}
const blue = {
  img: blueImage,
  state: "blue",
  name: "Tranquility Blue",
  link: "/Tranquility",
}
const green = {
  img: greenImage,
  state: "green",
  name: "Rejuvenation Green",
  link: "/Rejuvenation",
}
const yellow = {
  img: yellowImage,
  state: "yellow",
  name: "Happiness Yellow",
  link: "/Happiness",
}

const colorList = [red, blue, green, yellow]

const ColorList = () => {
  const content = colorList.map(item => (
    <div className={gridTest.colorItem}>
      <div style={imgGen(item.img)} className={gridTest.roomImage}>
        <Link
          className={flexboxGrid.linkStyles}
          to={item.link}
          state={{ color: item.state }}
        >
          {item.name}
          <div className={gridTest.contentOverlay}></div>
        </Link>
     
      </div>
      <div className={gridTest.contentDetails}><h3>{item.name}</h3></div>
    </div>
  ))

  return (
    <>
      <section className={gridTest.container}>
        <div className={gridTest.roomRow}>{content}</div>
      </section>
    </>
  )
}

export default ColorList
