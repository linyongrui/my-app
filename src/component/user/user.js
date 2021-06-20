import React, { Component } from 'react'
import Search from './search'
import List from './list'
import "./user.css"

export default class user extends Component {

    state = {
        users:[]
    }

    render() {
        return (
			<div className="container">
                <Search user={this.state.users}></Search>
                <List user={this.state.users}></List>
            </div>
        )
    }
}
