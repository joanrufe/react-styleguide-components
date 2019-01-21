import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import {LiveProvider, LiveEditor} from 'react-live'

const ComponentPreview = ({code, Component, markdownObject, toggleCodeVisibility, showCode}) => {
    const {title} = markdownObject.attributes
    return (
        <LiveProvider code={code} readOnly={true}>
            <h1>{title}</h1>
            <ReactMarkdown source={markdownObject.body}/>
            <Component />
            <a href="#" onClick={toggleCodeVisibility}>Show code</a>
            { showCode && <LiveEditor readOnly={true} /> }
        </LiveProvider>
    )
}
export default ComponentPreview