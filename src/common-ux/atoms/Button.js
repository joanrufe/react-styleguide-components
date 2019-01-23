import React from 'react'
import './Button.css'

const Button = ({children, theme}) => {
    const classes = ['btn']
    if(theme){
        classes.push('btn-' + theme)
    }
    return (
        <button className={classes.join(' ')}>
            {children}
        </button>
    )
}

export default Button
