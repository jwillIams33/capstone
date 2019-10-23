import React from 'react'
import { Link } from 'gatsby'

import flexboxGrid from './flexboxGrid.module.css'

const Header = () => {
    return (
        
        <div className={flexboxGrid.column}>
          <div className={flexboxGrid.wrapper}>
            <header className={flexboxGrid.navbar}>
              <h2>Logo</h2>
              <nav>
                <ul className={flexboxGrid.navList}>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      Dining &amp; Bars
                    </Link>
                  </li>
                  <li> 
                    <Link className={flexboxGrid.navItem} to="/">
                      Meetings &amp; Catering
                    </Link>
                  </li>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      AAH! Tonight
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </div>
     
    )
}

export default Header