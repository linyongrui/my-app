import React, { Component } from 'react'
import WelcomeCss from './welcome.module.css'

export default class Welcome extends Component {
    render() {
        return (
            <div>
                <h2 className={WelcomeCss.title}>Welcome</h2>
            </div>
        )
    }
}

