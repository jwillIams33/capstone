import React from "react"
import flexboxGrid from "../components/flexboxGrid.module.css"
import Row from "./row"
import Column from "./column"

const Hero = props => {
  return (
    <Row>
      <Column>
        <div style={props.style} className={flexboxGrid.hero}>
          Hero
        </div>
      </Column>
    </Row>
  )
}

export default Hero
