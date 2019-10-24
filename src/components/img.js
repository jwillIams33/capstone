import React from "react"
import flexboxGrid from "../components/flexboxGrid.module.css"
import Column from "./column"
import ImgContainer from './imgContainer'
import { Link } from "gatsby"

const Img = props => {
  return (
    <Column>
      <ImgContainer>
        <div style={props.style}>
          <Link className={flexboxGrid.linkStyles} to={props.link}>
            {props.name}
          </Link>
        </div>
      </ImgContainer>
    </Column>
  )
}

export default Img
