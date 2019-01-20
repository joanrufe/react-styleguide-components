import React from 'react'
import { Link } from 'react-router-dom'
import pages from './pages'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => {
    const pageNames = Object.keys(pages)
    const components = pageNames.map((component, i) =>{
        if (component === 'Home') return <li key={i}><Link to={'/'}>{`${component}`}</Link></li>
        return <li key={i}><Link to={`/${component}`}>{`${component}`}</Link></li>
    
    })

    return (
        <header>
            <nav>
                <ul>
                    {
                     components   
                    }
            </ul>
            </nav>
        </header>
    )
}

export default Header
