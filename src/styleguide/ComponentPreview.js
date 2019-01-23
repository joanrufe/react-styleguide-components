import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import {LiveProvider, LiveEditor} from 'react-live'
import ErrorBoundary from 'react-error-boundary'

const ErrorView = ({ componentStack, error }) => {
    return (
        <div >
            <p><strong>Oops! An error occured!</strong></p>
            <p>Here’s what we know…</p>
            <p className="error"><strong>Error:</strong> {error.toString()}</p>
            <pre className="error"><strong>Stacktrace:</strong> {componentStack}</pre>
        </div>
    );
}

const CodeViewer = ({code, showCode, toggleCodeVisibility, label}) => {
    return (
        <LiveProvider code={code} readOnly={true}>
            <div style={{marginTop: '10px', display: 'block'}}>
                <a
                    href="#" 
                    onClick={toggleCodeVisibility}>
                    {label}
                </a>
            </div>
            { showCode && <LiveEditor readOnly={true} /> }
        </LiveProvider>
    )
}

const ComponentPreview = ({exampleCode, componentCode, Component, markdownObject, toggleExampleCodeVisibility, toggleComponentCodeVisibility, showCodeExample, showCodeComponent}) => {
    const {title} = markdownObject.attributes
    return (
        <div>
            <h1>{title}</h1>
            <ReactMarkdown source={markdownObject.body}/>
            <ErrorBoundary FallbackComponent={ErrorView}>
                <Component />
            </ErrorBoundary>
            <CodeViewer code={exampleCode} showCode={showCodeExample} toggleCodeVisibility={toggleExampleCodeVisibility} label="Show Example Code"/>
            <CodeViewer code={componentCode} showCode={showCodeComponent} toggleCodeVisibility={toggleComponentCodeVisibility} label="Show Component Code" />
        </div>
    )
}


export default ComponentPreview