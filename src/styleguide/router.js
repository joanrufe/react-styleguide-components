import React from 'react'
import { Switch, Route } from 'react-router-dom'
import pages from './pages'

const Main = () => {
    const pageNames = Object.keys(pages)
    const components = pageNames.map(component =>{
        if (component === 'Home') return <Route exact path='/' component={pages[component]}/>
        return <Route path={`/${component}`} component={pages[component]}/>
    
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
