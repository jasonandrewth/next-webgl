import React from 'react'

import styles from './Header.module.scss'

const Header = ({ toggle }) => {
    return (
        <div className={styles.demo1header} onClick={toggle}>
          <h1 className={styles.demo1title}>
            WebGL Portfolio
          </h1>
          
        </div>
    )
}

export default Header
