import React from 'react'
import flexboxGrid from '../flexboxGrid.module.css'

import '../../styles/index.css'


const Column = (props) => {

    return (
        <article className = {flexboxGrid.column}>
            {props.children}
        </article>
       
    )
}

export default Column