import React, { useState } from "react"
import gridTest from "../../pages/newgrid.module.css"
import { Link } from "gatsby"

const ResponsiveHeader = props => {
  const [isToggled, setToggle] = useState(false)

  let itemsClass = gridTest.items
  let nav = gridTest.nav
  let menu = "Menu"


  if (isToggled) {
    nav += "is-toggled"
    menu = "Close"
  }

  return (
    <>
      <header className={gridTest.container}>
        <div className={gridTest.row}>
          <h2 className={gridTest.logo}>ANGAD ARTS HOTEL</h2>
          <button
            onClick={() => setToggle(!isToggled)}
            className={gridTest.menu}
          >
            {menu}
          </button>
        </div>

        <div className={itemsClass}>
          <h2 className={gridTest.logo2}>ANGAD ARTS HOTEL</h2>
          <ul className={nav}>
            <li className={gridTest.child}><Link clsssName={gridTest.links} to="/">Rooms</Link></li>
            <li className={gridTest.child}><Link to="/">Bars</Link></li>
            <li className={gridTest.child}><Link to="/">Meetings</Link></li>
            <li className={gridTest.child}><Link to="/">AHH! Tonight</Link></li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default ResponsiveHeader
