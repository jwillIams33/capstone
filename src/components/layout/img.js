import React from "react"
import Column from "../grid/column"
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
