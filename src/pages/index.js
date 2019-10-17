import React from "react"
import Layout from "../components/layout"
import ColorList from "../components/colorList"

const IndexPage = () => {
    return (
        <Layout>
            <h1>Stay Colorful</h1>
            <p>Featuring artfully designed guest rooms and suites, ours is the first hotel in the world that gives you the options of booking your room not only by bed, but also invited to experience an emotion of color – Passion Red, Tranquility Blue, Rejuvenation Green or Happiness Yellow.</p>
            <h2>Choose Your Color</h2>
             <ColorList />
        </Layout>
    )
}

export default IndexPage

