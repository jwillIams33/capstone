import React from 'react'
import flexboxGrid from '../flexboxGrid.module.css'
import '../../styles/index.css'


const Row = (props) => {

    return (
        <section className = {flexboxGrid.row}>
            {props.children}
        </section>
       
    )
}

export default Row