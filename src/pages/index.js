import React from "react"
import Layout from "../components/layout"
import imagelist from "../images/imagelist"
import { Link } from "gatsby"

import headerStyles from "../components/header.module.css"

import boxStyles from "../components/box.module.css"
import flexboxGrid from "../components/flexboxGrid.module.css"

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue_queen.jpg"

import layoutStyles from "../components/layout.module.css"

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

const IndexPage = props => {
  return (
    <div className={flexboxGrid.container}>
      <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
          <div className={flexboxGrid.wrapper}>
            <header className={flexboxGrid.navbar}>
              <h2>Logo</h2>
              <nav>
                <ul className={flexboxGrid.navList}>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      Dining &amp; Bars
                    </Link>
                  </li>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      Meetings &amp; Catering
                    </Link>
                  </li>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      AAH! Tonight
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
      </div>
      <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
          <div style={bg} className={flexboxGrid.hero}>
            Hero
          </div>
        </div>
      </div>

      <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
          <div className={flexboxGrid.wrapper}>
            <h1>STAY COLORFUL</h1>
            <p>
              Featuring 146 artfully designed guest rooms, the first hotel in
              the world that gives you the option of booking your room not only
              by bed and room size, but also by the emotion of color.
            </p>
          </div>
        </div>
      </div>
      <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
          <h2>CHOOSE YOUR COLOR</h2>
        </div>
      </div>
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
      </div>

      <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>footer</div>
      </div>
    </div>
  )
}

export default IndexPage
