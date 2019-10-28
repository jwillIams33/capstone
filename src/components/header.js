import React from 'react'
import { Link } from 'gatsby'

import flexboxGrid from './flexboxGrid.module.css'

const Header = () => {
    return (
        
        <div className={flexboxGrid.column}>
          <div className={flexboxGrid.wrapper}>
            <header className={flexboxGrid.navbar}>
              <h2 className={flexboxGrid.logo}>Logo</h2>
              <label for="nav-toggle" class={flexboxGrid.navToggleLabel}></label>
              <input type = "checkbox" className={flexboxGrid.navToggle} id="nav-toggle"></input>
              <nav>
                <ul className={flexboxGrid.navList}>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link className={flexboxGrid.navItem} to="/">
                     Bars
                    </Link> 
                  </li>
                  <li> 
                    <Link className={flexboxGrid.navItem} to="/">
                      Meetings 
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