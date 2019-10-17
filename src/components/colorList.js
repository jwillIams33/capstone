import React from 'react'
import { Link } from 'gatsby'

const ColorList = () => {
    return (
        <ul>
        <li><Link to="/redPage">Red</Link></li>
        <li><Link to="/bluePage">Blue</Link></li>
        <li><Link to="/greenPage">Green</Link></li>
        <li><Link to="/yellowPage">Yellow</Link></li>
        </ul>
    )
}

export default ColorList