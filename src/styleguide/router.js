import React from 'react'
import { Switch, Route } from 'react-router-dom'
import pages from './pages'
import ComponentPreview from './ComponentPreview'

class Router extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showCodeExample: false,
            showCodeComponent: false
        }
        this.toggleExampleCodeVisibility = this.toggleExampleCodeVisibility.bind(this)
        this.toggleComponentCodeVisibility = this.toggleComponentCodeVisibility.bind(this)
    }

    toggleExampleCodeVisibility() {
        this.setState({
            showCodeExample: !this.state.showCodeExample
        })
    }
    toggleComponentCodeVisibility() {
        this.setState({
            showCodeComponent: !this.state.showCodeComponent
        })
    }

    render() {
        const pageNames = Object.keys(pages)
        return (
            <main>
                <Switch>
                    {
                        pageNames.map((component, i) => {
                            const rawExampleCode =  require(`!!raw-loader!./pages/${component}.js`);
                            const markdownObject =  component !== 'Home' && require(`./pages/${component}.md`)
                            let rawComponentCode
                            if(markdownObject && markdownObject.attributes){
                                const {component, category} = markdownObject.attributes
                                rawComponentCode = require(`!!raw-loader!../common-ux/${category}/${component}.js`);
                            }
                            if (component === 'Home') return <Route key={i} exact path='/' component={pages[component]}/>    
                            return (
                                <Route 
                                    key={i} 
                                    path={`/${component}`} 
                                    component={() => (
                                        <ComponentPreview 
                                            exampleCode={rawExampleCode}
                                            componentCode={rawComponentCode}
                                            Component={pages[component]}
                                            markdownObject={markdownObject}
                                            showCodeExample={this.state.showCodeExample}
                                            showCodeComponent={this.state.showCodeComponent}
                                            toggleExampleCodeVisibility={this.toggleExampleCodeVisibility}
                                            toggleComponentCodeVisibility={this.toggleComponentCodeVisibility}
                                        />
                                    )}
                                />
                            )
                        })
                    }
                </Switch>
            </main>
        )
    }
}
export default Router
