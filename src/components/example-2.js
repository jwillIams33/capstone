import React, { useState } from "react"
import gridTest from "../pages/newgrid.module.css"

const ResponsiveHeader= (props) => {

   
    const [isToggled, setToggle] = useState(false);

    let itemsClass= gridTest.items;

    if(isToggled) {
      itemsClass +='is-toggled';
    }

   

    return (
      <>
        <header className={itemsClass}>
          <div className = {gridTest.child}>Child</div>
          <div className = {gridTest.child}>Child</div>
          <div className = {gridTest.child}>Child</div>
          <div className = {gridTest.child}>Child</div>
        </header>
        <button onClick = {() => setToggle(!isToggled)} className={gridTest.menu}>Menu</button>
      </>
    )
  }

  export default ResponsiveHeader