import React from "react"
import flexboxGrid from "../components/flexboxGrid.module.css"


const Hero = (props) => {
    return (
        <div style = {props.style} className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
          <div className={flexboxGrid.hero}>
            Hero
          </div>
        </div>
      </div>
    )
}

export default Hero