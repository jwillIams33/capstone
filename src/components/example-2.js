import React, { useState } from "react"
import gridTest from "../pages/newgrid.module.css"

const ResponsiveHeader = props => {
  const [isToggled, setToggle] = useState(false)

  let itemsClass = gridTest.items;

  if (isToggled) {
    itemsClass += "is-toggled";
  }

  return (
    <>
      <button onClick={() => setToggle(!isToggled)} className={gridTest.menu}>
        Menu
      </button>
      <header className={itemsClass}>
        <div className={gridTest.child}>child</div>
        <div className={gridTest.child}>child</div>
        <div className={gridTest.child}>child</div>
      </header>
    </>
  )
}

export default ResponsiveHeader
