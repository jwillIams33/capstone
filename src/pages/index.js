import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <section>
<h2>logo</h2>
<h1>Stay Colorful</h1>
<p>Featuring artfully designed guest rooms and suites, ours is the first hotel in the world that gives you the options of booking your room not only by bed, but also invited to experience an emotion of color – Passion Red, Tranquility Blue, Rejuvenation Green or Happiness Yellow.</p>
<ul>
<li><Link to="/redPage">Red</Link></li>
<li><Link>Blue</Link></li>
<li><Link>Green</Link></li>
<li><Link>Yellow</Link></li>
</ul>
</section>
    )
}

export default IndexPage

