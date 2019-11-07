import React from 'react'
import Wrapper from './wrapper'
import Row from './row'
import Column from './column'
import ImgContainer from './imgContainer'
import { Link } from "gatsby"
import flexboxGrid from './flexboxGrid.module.css'

import GridItemInfo from './gridItemInfo'
import red from '../images/pageData'

import redKing from "../images/red/red_king.jpg"
import blueQueen from "../images/blue/blue-1.jpg"
import yellowKing from "../images/yellow/yellow-king.jpg"
import greenKing from "../images/green/green-8.jpg"


import '../styles/index.css'





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



const RoomGrid = () => {

    return (
       <Wrapper>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(red.queen)}><Link className={flexboxGrid.linkStyles} to="/redPage">
                  red room
                </Link></div>
                    </ImgContainer>
                    <GridItemInfo type="Queen Room" price="$130.00"/>   
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(red.king)}></div>
                    </ImgContainer>
                    <GridItemInfo type="King Room" price="$130.00"/>  
               </Column>
           </Row>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(red.double)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Double Queen" price="$130.00"/>  
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(red.bunk)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Double Bunk" price="$130.00"/>  
               </Column>
           </Row>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(red.loft)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Loft" price="$130.00"/>  
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(red.suite)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Suite" price="$130.00"/>  
               </Column>
           </Row>
       </Wrapper>
    )
}

export default RoomGrid