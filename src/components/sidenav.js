import React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import gridTest from "../pages/newgrid.module.css"
import flexboxGrid from "./flexboxGrid.module.css"

const Sidenav = props => {
  const [isToggled, setToggle] = useState(true)

  let navClass = gridTest.sidenav

  let style = {
      width: "0"
  }
  
  if (isToggled) {
   style.width="250px"
  }
  

  return (
    <>
      <div style={style} className={navClass}>
        <Link className={gridTest.closebtn} onclick={() => setToggle(!isToggled)}>
          &times;
        </Link>
        <Link to="#">About</Link>
        <Link to="#">Services</Link>
        <Link to="#">Clients</Link>
        <Link to="#">Contact</Link>
      </div>

      <h2>Animated Sidenav Example</h2>
      <p>Click on the element below to open the side navigation menu.</p>
      <span onclick={() => setToggle(!isToggled)}>&#9776; open</span>
    </>
  )
}

export default Sidenav
