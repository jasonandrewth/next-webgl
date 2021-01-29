import React, {useEffect} from 'react'

const project = () => {

    const removeCanvasHandler = () => {
        const el = document.querySelector('canvas');
        el && el.remove();
    }

    useEffect(() => {
      removeCanvasHandler()
    }, [])


    return (
        <>
          <div>
            Hello  
          </div>

        </>
    )
}

export default project
