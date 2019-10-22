import React from "react"
import Layout from "../components/layout"
import imagelist from "../images/imagelist"
import { Link } from "gatsby"

import boxStyles from "../components/box.module.css"
import flexboxGrid from "../components/flexboxGrid.module.css"

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue_queen.jpg"

import layoutStyles from "../components/layout.module.css"



const bg = {
  backgroundImage: 'url(' + redKing + ')',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100%',
  overflow: 'hidden'
  };

  const bg2 = {
    backgroundImage: 'url(' + blueQueen + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
    };



const IndexPage = (props) => {
    return (
        <Layout>
            {/* <img src = {imagelist.blueDouble} alt = "yellow double bunk room"/> */}
            <div className={layoutStyles.imgContainer}>
                <div style = {bg}></div>
            </div>
            <div className = {flexboxGrid.main}>
            <h1>Stay Colorful </h1>
            <p>Featuring artfully designed guest rooms and suites, ours is the first hotel in the world that gives you the options of booking your room not only by bed, but also invited to experience an emotion of color – Passion Red, Tranquility Blue, Rejuvenation Green or Happiness Yellow.</p>
            <h2>Choose Your Color</h2>

            </div>
           
             
             <div className={boxStyles.container}>
               <div className ={flexboxGrid.row}>
                 <div className = {flexboxGrid.column}>
                 <div style = {bg}></div>
                 </div>
                 <div className = {flexboxGrid.column}>
                   <div style = {bg2}></div>
                    {/* <Link to ="/yellowPage"><img src = {imagelist.greenKing} alt = "yellow double bunk room"/></Link> */}
                 </div>
               </div>
               <div className ={flexboxGrid.row}>
                 <div className = {flexboxGrid.column}>
                 <Link to ="/yellowPage"><img src = {imagelist.blueDouble} alt = "yellow double bunk room"/></Link>
                 </div>
                 <div className = {flexboxGrid.column}>
                 <Link to ="/yellowPage"><img src = {imagelist.blueDouble} alt = "yellow double bunk room"/></Link>
                 </div>
               </div>
               
             </div>
             
        </Layout>
    )
}



export default IndexPage



