import React, {useEffect} from 'react'

//import Selection from "components/selection";

//import Layout from "components/layout";
//import Seo from "components/seo";

const Category = ({ category}) => {

    const removeCanvasHandler = () => {
        const el = document.querySelector('canvas');
        el && el.remove();
    }


  useEffect(() => {
    removeCanvasHandler()
  }, [])


  return (
      <div className="uk-section">
        <h1>Photography</h1>
      </div>
  );
};


export default Category;