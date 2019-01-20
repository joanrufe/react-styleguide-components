import React from 'react'
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
  } from 'react-live'
  
  const ComponentPreview = ({code, Component}) => {
      return (
        <div>   
            {Component.name === "Home" ?
                <Component /> : 
                <LiveProvider code={code} readOnly={true}>
                    <LiveEditor />
                    <Component />
                </LiveProvider>
            }
        </div>
    )
}

export default ComponentPreview