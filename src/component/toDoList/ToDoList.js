import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import List from './List'
import './toDoList.css'

export default class ToDoList extends Component {
    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false }
        ]
    }

    addTodo = (todo) => {
        this.setState(
            { todos: [todo, ...this.state.todos] }
        )
    }

    render() {
        return (
            <div className='app'>
                <Header addTodo={this.addTodo}></Header>
                <List todos={this.state.todos}></List>
                <Footer></Footer>
            </div>
        )
    }
}
