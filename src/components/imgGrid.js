import React from 'react'
import Wrapper from './wrapper'
import Row from './row'
import Column from './column'
import ImgContainer from './imgContainer'
import { Link } from "gatsby"
import flexboxGrid from './flexboxGrid.module.css'

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue-1.jpg"
import yellowKing from "../images/yellow/yellow-king.jpg"
import greenKing from "../images/green/green-8.jpg"

import '../styles/index.css'



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

  const bg3 = {
    backgroundImage: "url(" + yellowKing + ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }

  const bg4 = {
    backgroundImage: "url(" + greenKing+ ")",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  }

  function imgGen(img){
    let bg = {
      backgroundImage: "url(" + img + ")",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
    }
    return bg
  }



const ImgGrid = () => {

    return (
       <Wrapper>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={bg}><Link className={flexboxGrid.linkStyles} to="/Passion_Red">
                  red room
                </Link></div>
                    </ImgContainer>
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={bg2}></div>
                    </ImgContainer>
               </Column>
           </Row>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={bg3}></div>
                    </ImgContainer>
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={bg4}></div>
                    </ImgContainer>
               </Column>
           </Row>
       </Wrapper>
    )
}

export default ImgGrid