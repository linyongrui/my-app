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

    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map(
            todo => {
                if (id === todo.id) {
                    todo.done = done
                }
                return todo
            }
        )
        this.setState(
            { todos: newTodos }
        )
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter(
            todo => {
                return id !== todo.id
            }
        )
        this.setState(
            { todos: newTodos }
        )
    }

    checkAll = (done) => {
        const { todos } = this.state
        const newTodos = todos.map(
            todo => {
                todo.done = done
                return todo
            }
        )
        this.setState(
            { todos: newTodos }
        )
    }

    clearAll = () => {
        const { todos } = this.state
        const newTodos = todos.filter(
            todo => {
                return !todo.done
            }
        )
        this.setState(
            { todos: newTodos }
        )
    }

    render() {
        return (
            <div className='app'>
                <Header addTodo={this.addTodo}></Header>
                <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}></List>
                <Footer todos={this.state.todos} checkAll={this.checkAll}  clearAll={this.clearAll} ></Footer>
            </div>
        )
    }
}
