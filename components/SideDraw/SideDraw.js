import React from 'react'
import Link from 'next/link'

import Backdrop from '../UX/Backdrop/Backdrop'

import styles from './SideDrawer.module.scss'

const SideDraw = ({open, closed, categories}) => {

    let classes = [styles.SideDrawer, styles.Close]

    if (open) {
      classes = [styles.SideDrawer, styles.Open]
    }

    return (
      <>
        <div className={classes.join(' ')}>
          <ul className={styles.Nav}>
                <li>
                  <Link as={`/category/photography`} href="/category/photography">
                    <a onClick={closed} className="uk-link-reset">PHOTOGRAPHY</a>
                  </Link>
                </li>

                <li>
                  <Link as={`/category/video`} href="/category/video">
                    <a onClick={closed} className="uk-link-reset">VIDEO</a>
                  </Link>
                </li>
          </ul>  

          <div className={styles.Footer}>
            <Link href="/">
              <a onClick={closed}>Home</a>
            </Link>
            <Link href="/project">
              <a onClick={closed}>Bio</a>
            </Link>
            <Link href="/">
              <a onClick={closed}>Imprint</a>
            </Link>
          </div>
        </div>
        <Backdrop show={open} clicked={closed}></Backdrop>
      </>
    )
}

export default SideDraw


