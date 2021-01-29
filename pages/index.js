import styles from '../styles/Home.module.scss'


import img from '../images/example10.jpg'

import Figure from 'components/Figure/Figure'
import Canvas from 'components/Canvas'

import React, { useEffect } from 'react'
//import { Renderer, Camera, Transform, Plane, Mesh, Program, Texture } from 'ogl'



export default function Home({ galimgs }) {

  const images = [1,2,3,4,5,6,7,8,9,10,11,12]

  const imageList = images.map((image, index) => {
    return (
      <Figure src={img} key={index}/>
    )
  })



  return (
    <>
      <div className={styles.demo1}>
        
        <div className={[styles.demo1gallery, 'demogal'].join(' ')}>
          {imageList}
        </div>
      </div>

      <Canvas/>
    </>
  )
}




