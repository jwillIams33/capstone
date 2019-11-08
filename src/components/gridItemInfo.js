import React from "react"
import { Link } from "gatsby"
import flexboxGrid from "./flexboxGrid.module.css"

const GridItemInfo = props => {
  return (
    <div className={flexboxGrid.roomInfo}>
      <p>{props.type}</p>
      <p>{props.price}<span>/night</span></p>
    </div>
  )
}

export default GridItemInfo
