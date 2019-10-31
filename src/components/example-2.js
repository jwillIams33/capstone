import React, { useState } from "react"
import gridTest from "../pages/newgrid.module.css"

const ResponsiveHeader = props => {
  const [isToggled, setToggle] = useState(false)
 

  let itemsClass = gridTest.items
  let nav = gridTest.nav
  let menu = "Menu"

  if (isToggled) {
    nav += "is-toggled";
    menu = "Close"
  }

  return (
    <>
      <header>
        <div className={gridTest.row}>
          <h2 className={gridTest.logo}>Logo</h2>
          <button
            onClick={() => setToggle(!isToggled)}
            className={gridTest.menu}
          >
           {menu}
          </button>
        </div>

        <div className={itemsClass}>
          <h2 className={gridTest.logo2}>Logo</h2>

          <ul className={nav}>
            <li className={gridTest.child}>Child</li>
            <li className={gridTest.child}>Child</li>
            <li className={gridTest.child}>Child</li>
            <li className={gridTest.child}>Child</li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default ResponsiveHeader
