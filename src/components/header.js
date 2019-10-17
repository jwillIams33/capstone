import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
              <h2>Logo</h2>
              <nav>
                  <ul>
                      <li>
                          <Link to="/">Rooms</Link>
                      </li>
                      <li>
                          <Link to="/">Dining &amp; Bars </Link>
                      </li>
                      <li>
                          <Link to="/">Meetings &amp; Catering</Link>
                      </li>
                      <li>
                          <Link to="/">AAH! Tonight</Link>
                      </li>
                  </ul>
              </nav>
        </header>
      
    )
}

export default Header