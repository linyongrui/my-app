import React, { Component } from 'react'
import Search from './search'
import List from './list'
import "./user.css"

export default class user extends Component {

    state = {
        users:[]
    }

    updateUsers = (newState) =>{
        this.setState(newState)
    }

    render() {
        return (
			<div className="container">
                <Search updateUsers={this.updateUsers}></Search>
                <List users={this.state.users}></List>
            </div>
        )
    }
}
