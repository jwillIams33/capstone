import React from 'react'
import flexboxGrid from './flexboxGrid.module.css'

import '../styles/index.css'


const Wrapper = (props) => {

    return (
        <div className = {flexboxGrid.wrapper}>
            {props.children}
        </div>
       
    )
}

export default Wrapper