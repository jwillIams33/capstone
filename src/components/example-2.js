import React, { useState } from "react"
import gridTest from "../pages/newgrid.module.css"

const ResponsiveHeader= (props) => {

   
    const [showMenu, toggleMenu] = useState(false)

   

    return (
      <div>
        <header className={gridTest.main}>
            <div className={gridTest.item}>child</div>
            <div className={gridTest.item}>child</div>
            <div className={gridTest.item}>child</div>
            <div className={gridTest.item}>child</div> 
        </header>
        {showMenu && <header className={gridTest.mobile}>
            <div className={gridTest.item}>child</div>
            <div className={gridTest.item}>child</div>
            <div className={gridTest.item}>child</div>
            <div className={gridTest.item}>child</div> 
        </header>}
        <button className={gridTest.menu} onClick ={() => toggleMenu(showMenu => !showMenu)}>click me</button>
      </div>
    )
  }

  export default ResponsiveHeader