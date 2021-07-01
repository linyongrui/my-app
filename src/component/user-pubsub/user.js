import React, { Component } from 'react'
import Search from './search'
import List from './list'
import "./user.css"

export default class user extends Component {

    render() {
        return (
            <div className="container">
                <Search></Search>
                <List></List>
            </div>
        )
    }
}
