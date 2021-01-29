import React, { useState, useEffect } from 'react'

import Header from "./Header/Header";
import SideDraw from './SideDraw/SideDraw';

//import Canvas from 'components/Canvas'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const mainStyle = {
  paddingTop: "20rem",
  paddingLeft: "4rem"
};


const Layout = props => {

  const [showSideDrawer, setShowSideDrawer] = useState(false)

  const closedHandler = () => {
    setShowSideDrawer(prevState => !prevState)
  }
    
  return (
    <div className="Layout" style={layoutStyle}>
      <Header toggle={closedHandler}/>
      <SideDraw
        closed={closedHandler} 
        open={showSideDrawer}
      ></SideDraw>
      <div className="Content" style={mainStyle}>
        {props.children}
      </div>
    </div>
  )
};

export default Layout;




