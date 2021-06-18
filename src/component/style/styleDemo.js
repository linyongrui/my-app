import React, { Component } from 'react'
import Hello from './hello/hello'
import Welcome from './welcome/welcome'

export default class style extends Component {
    render() {
        return (
            <div>
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}
