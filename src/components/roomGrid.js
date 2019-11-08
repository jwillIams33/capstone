import React from 'react'
import Wrapper from './wrapper'
import Row from './row'
import Column from './column'
import ImgContainer from './imgContainer'
import { Link } from "gatsby"
import flexboxGrid from './flexboxGrid.module.css'

import GridItemInfo from './gridItemInfo'


import {queen, king, double, bunk, loft, suite, grandSuite} from "../data/content"


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
                        <div style={imgGen(queen.red)}><Link className={flexboxGrid.linkStyles} to="/Queen_Room">
                  red room
                </Link></div>
                    </ImgContainer>
                    <GridItemInfo type={queen.name} price={queen.price}/>   
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(king.red)}></div>
                    </ImgContainer>
                    <GridItemInfo type="King Room" price={king.price}/>  
               </Column>
           </Row>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(double.red)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Double Queen" price="$130.00"/>  
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(bunk.red)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Double Bunk" price="$130.00"/>  
               </Column>
           </Row>
           <Row>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(loft.red)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Loft" price="$130.00"/>  
               </Column>
               <Column>
                    <ImgContainer>
                        <div style={imgGen(suite.red)}></div>
                    </ImgContainer>
                    <GridItemInfo type="Suite" price="$130.00"/>  
               </Column>
           </Row>
       </Wrapper>
    )
}

export default RoomGrid