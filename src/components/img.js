import React from "react"
import flexboxGrid from "../components/flexboxGrid.module.css"
import Column from "./column"
import ImgContainer from "./imgContainer"
import { Link } from "gatsby"

const Img = ({ id }) => {
  return (
    <Column>
      <Link to={`/room_test/`} state={{ color: "red" }}>
        view room
      </Link>
    </Column>
  )
}

export default Img
