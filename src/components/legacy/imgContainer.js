import React from 'react'
import flexboxGrid from '../flexboxGrid.module.css'

import '../../styles/index.css'


const ImgContainer = (props) => {

    return (
        <div className = {flexboxGrid.imgContainer}>
            {props.children}
        </div>
       
    )
}

export default ImgContainer