import React from "react"
import gridTest from "./newgrid.module.css"

const greenPage = () => {
  return (
    <div className={gridTest.container}>
      <div className={gridTest.gridRow}>
        <div className={gridTest.gridItem}>
          <div className={gridTest.gridItemWrapper}>
            <div className={gridTest.gridItemContainer}></div>
          </div>
        </div>
        <div className={gridTest.gridItem}>
          <div className={gridTest.gridItemWrapper}>
            <div className={gridTest.gridItemContainer}></div>
          </div>
        </div>

        <div className={gridTest.gridItem}>
          <div className={gridTest.gridItemWrapper}>
            <div className={gridTest.gridItemContainer}></div>
          </div>
        </div>
        <div className={gridTest.gridItem}>
          <div className={gridTest.gridItemWrapper}>
            <div className={gridTest.gridItemContainer}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default greenPage
