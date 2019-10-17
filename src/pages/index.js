import React from "react"
import { Link } from 'gatsby'
import Header from "../components/header"
import Footer from "../components/footer"

const IndexPage = () => {
    return (
        <section>
<Header />
<h1>Stay Colorful</h1>
<p>Featuring artfully designed guest rooms and suites, ours is the first hotel in the world that gives you the options of booking your room not only by bed, but also invited to experience an emotion of color – Passion Red, Tranquility Blue, Rejuvenation Green or Happiness Yellow.</p>
<ul>
<li><Link to="/redPage">Red</Link></li>
<li><Link to="/bluePage">Blue</Link></li>
<li><Link to="/greenPage">Green</Link></li>
<li><Link to="/yellowPage">Yellow</Link></li>
</ul>
<Footer />
</section>
    )
}

export default IndexPage

