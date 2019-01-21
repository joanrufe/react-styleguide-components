import React from 'react'
import { Switch, Route } from 'react-router-dom'
import pages from './pages'
import ComponentPreview from './ComponentPreview'
import { renderers } from 'react-markdown/lib/with-html';

const ComponentWithMarkdown = (component) => () => {
    
    return (
        <div>
            <ComponentPreview 
                code={rawComponent}
                Component={pages[component]}
                markdownObject={markdownObject}
            />
        </div>
    )
}

class Router extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showCode: false
        }
        this.toggleCodeVisibility = this.toggleCodeVisibility.bind(this)
    }

    toggleCodeVisibility() {
        console.log('changing: ' + this.state.showCode)
        this.setState({
            showCode: !this.state.showCode
        })
    }

    render() {
        const pageNames = Object.keys(pages)
        return (
            <main>
                <Switch>
                    {
                        pageNames.map((component, i) => {
                            const rawComponent =  require(`!!raw-loader!./pages/${component}.js`);
                            const markdownObject =  component !== 'Home' && require(`./pages/${component}.md`)
                            if (component === 'Home') return <Route key={i} exact path='/' component={pages[component]}/>    
                            return <Route 
                                key={i} 
                                path={`/${component}`} 
                                component={() => <ComponentPreview 
                                    code={rawComponent}
                                    Component={pages[component]}
                                    markdownObject={markdownObject}
                                    showCode={this.state.showCode}
                                    toggleCodeVisibility={this.toggleCodeVisibility}
                                />}
                            />
                        })
                    }
                </Switch>
            </main>
        )
    }
}
export default Router
