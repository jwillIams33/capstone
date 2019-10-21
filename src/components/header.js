import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.css'
import flexboxGrid from './flexboxGrid.module.css'

const Header = () => {
    return (
        <div className = {flexboxGrid.row}>
            <div className = {flexboxGrid.column}>
            <header className={headerStyles.navbar}>
              <h2>Logo</h2>
              <nav>
                  <ul className = {headerStyles.navList}>
                      <li>
                          <Link className={headerStyles.navItem} to="/">Rooms</Link>
                      </li>
                      <li>
                          <Link className={headerStyles.navItem}  to="/">Dining &amp; Bars </Link>
                      </li>
                      <li>
                          <Link className={headerStyles.navItem}  to="/">Meetings &amp; Catering</Link>
                      </li>
                      <li>
                          <Link className={headerStyles.navItem}  to="/">AAH! Tonight</Link>
                      </li>
                  </ul>
              </nav>
        </header>

            </div>
        </div>
    )
}

export default Header