import React from 'react'
import { Switch, Route } from 'react-router-dom'
import pages from './pages'
import ComponentPreview from './ComponentPreview'

const RenderComponentHOC = (component) => () => {
    const rawComponent =  require(`!!raw-loader!./pages/${component}.js`);
    return (
        <div>
            <ComponentPreview code={rawComponent} Component={pages[component]} />
        </div>
    )
}

const Main = () => {
    const pageNames = Object.keys(pages)
    const components = pageNames.map(component =>{
        const rawComponent =  require(`!!raw-loader!./pages/${component}.js`);
        if (component === 'Home') return (
            <Route exact path='/' component={RenderComponentHOC(component)}/>
        )
        return <Route path={`/${component}`} component={RenderComponentHOC(component)}/>
        // if (component === 'Home') return (
        //     <Route exact path='/' component={pages[component]}/>
        // )
        // return <Route path={`/${component}`} component={pages[component]}/>
    })

    return (
        <main>
            <Switch>
                {
                    components
                }
            </Switch>
        </main>
    )
}
export default Main
