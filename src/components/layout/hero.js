import React from "react"
import flexboxGrid from "../../components/flexboxGrid.module.css"
import Row from "../grid/row"
import Column from "../grid/column"


const Hero = props => {
  return (
 
    <Row>
      <Column>
        <div style={props.style} className={flexboxGrid.hero}>
          {props.title}
        </div>
      </Column>
    </Row>

  )
}

export default Hero
