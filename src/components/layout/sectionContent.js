import React from "react"
import flexboxGrid from "../flexboxGrid.module.css"
import gridTest from "../../pages/newgrid.module.css"

const SectionContent = (props) => {
  return (
    <div>
      <div className={flexboxGrid.row}>
        <div className={flexboxGrid.column}>
          <div className={flexboxGrid.wrapper}>
            <h1 className={gridTest.headlineAlt}>{props.heading}</h1>
            <p>
              Featuring 146 artfully designed guest rooms, the first hotel in
              the world that gives you the option of booking your room not only
              by bed and room size, but also by the emotion of color.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionContent
