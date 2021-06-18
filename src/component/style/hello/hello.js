import React, { Component } from 'react'
import HelloCss from './hello.module.css'

export default class Hello extends Component {
    render() {
        return (
            <div>
                <h2 className={HelloCss.title}>Hello</h2>
            </div>
        )
    }
}
