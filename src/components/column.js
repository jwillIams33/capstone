import React from 'react'
import flexboxGrid from './flexboxGrid.module.css'

import '../styles/index.css'


const Column = (props) => {

    return (
        <div className = {flexboxGrid.column}>
            {props.children}
        </div>
       
    )
}

export default Column