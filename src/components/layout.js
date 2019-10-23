import React from 'react'
import Header from "../components/header"
import Footer from "../components/footer"
import flexboxGrid from './flexboxGrid.module.css'

import '../styles/index.css'


const Layout = (props) => {

    return (
        <div className = {flexboxGrid.container}>
            <div className = {flexboxGrid.row}>
            <Header />
            {props.children}
            </div>
            <Footer />
        </div>
       
    )
}

export default Layout