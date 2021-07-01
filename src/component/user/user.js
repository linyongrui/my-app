import React, { Component } from 'react'
import Search from './search'
import List from './list'
import "./user.css"

export default class user extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        errorMsg: ''
    }

    updateUsers = (newState) => {
        this.setState(newState)
    }

    render() {
        return (
            <div className="container">
                <Search updateUsers={this.updateUsers}></Search>
                <List {...this.state}></List>
            </div>
        )
    }
}
