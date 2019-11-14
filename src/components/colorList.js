import React from 'react'
import { Link } from 'gatsby'
import gridTest from "../pages/newgrid.module.css"
import flexboxGrid from "./flexboxGrid.module.css"
import imgGen from "../helpers/imgGen"
import { king } from "../data/content"


const { red: redImage, blue: blueImage, green: greenImage, yellow: yellowImage} = king


   const red = {
        img: redImage,
        state: "red",
        name: "Passion Red"
    }
    const blue ={ 
        img: blueImage,
        state: "blue",
        name: "Tranquility Blue"
    }
   const green = {
        img: greenImage,
        state: "green",
        name: "Rejuvenation Green"
    }
    const yellow = {
        img: yellowImage,
        state: "yellow",
        name: "Happiness Yellow"
    }

    const colorList = [red, blue, green, yellow]



const ColorList = () => {
  const content = colorList.map(item => (
    <div className={gridTest.roomItem}>
      <div style={imgGen(item.img)} className={gridTest.roomImage}><Link className={flexboxGrid.linkStyles} to={`/room_test/`} state ={{color: item.state}}>{item.name}</Link></div>
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
