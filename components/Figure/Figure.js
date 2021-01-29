import React from 'react'

import styles from './Figure.module.scss'

const Figure = ({ src }) => {

    return (
        <>
         <figure className={styles.demo1galleryfigure}>
            <img className={styles.demo1galleryimage} src={src} crossOrigin="anonymous"/>
         </figure>   
        </>
    )
}

export default Figure
