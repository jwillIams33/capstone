import React from 'react'
import flexboxGrid from './flexboxGrid.module.css'

import '../styles/index.css'


const Row = (props) => {

    return (
        <div className = {flexboxGrid.row}>
            {props.children}
        </div>
       
    )
}

export default Row