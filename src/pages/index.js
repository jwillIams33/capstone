import React from "react"
import Layout from "../components/layout"
import ColorList from "../components/colorList"
import yellowBunk from "../images/imagelist"

import boxStyles from "../components/box.module.css"



const IndexPage = (props) => {
    return (
        <Layout>
            <img src = {yellowBunk} alt = "yellow double bunk room"/>
            <h1>Stay Colorful </h1>
            <p>Featuring artfully designed guest rooms and suites, ours is the first hotel in the world that gives you the options of booking your room not only by bed, but also invited to experience an emotion of color – Passion Red, Tranquility Blue, Rejuvenation Green or Happiness Yellow.</p>
            <h2>Choose Your Color</h2>
             <ColorList />
             <div className={boxStyles.container}>
                <div className ={boxStyles.box}>Green</div>
                <div className ={boxStyles.box}>Red</div>
                <div className ={boxStyles.box}>Yellow</div>
                <div className ={boxStyles.box}>Blue</div>
             </div>
             
        </Layout>
    )
}



export default IndexPage



