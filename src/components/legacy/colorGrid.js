import React from "react"
import flexboxGrid from './flexboxGrid.module.css'
import { Link } from "gatsby"


import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue-1.jpg"

import yellowKing from "../images/yellow/yellow-3.jpg"
import greenKing from "../images/green/green-8.jpg"

const bg = {
    backgroundImage: "url(" + redKing + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }
  
  const bg2 = {
    backgroundImage: "url(" + blueQueen + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }

  const bg3 = {
    backgroundImage: "url(" + yellowKing + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }

  const bg4 = {
    backgroundImage: "url(" + greenKing+ ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }

const ColorGrid = () => {
    return (
        <div className={flexboxGrid.wrapper}>
        <div className={flexboxGrid.row}>
          <div className={flexboxGrid.column}>
            <div className={flexboxGrid.imgContainer}>
              <div style={bg}>
                <Link className={flexboxGrid.linkStyles} to="/redPage">
                  red room
                </Link>
              </div>
            </div>
          </div>
          <div className={flexboxGrid.column}>
            <div className={flexboxGrid.imgContainer}>
              <div style={bg2}></div>
            </div>
          </div>
        </div>
        <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
            <div className={flexboxGrid.imgContainer}>
              <div style={bg3}>
                <Link className={flexboxGrid.linkStyles} to="/redPage">
                  red room
                </Link>
              </div>
            </div>
          </div>
          <div className={flexboxGrid.column}>
            <div className={flexboxGrid.imgContainer}>
              <div style={bg4}></div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ColorGrid