import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouseOn: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouseOn: flag })
        }
    }

    handleChange = (id) => {
        return (e) => {
            const { updateTodo } = this.props
            updateTodo(id, e.target.checked)
        }
    }

    handleDelete = (id) => {
        return () => {
            if(window.confirm('确定删除吗？')) {
                this.props.deleteTodo(id)
            }
        }
    }

    render() {
        const { id, name, done } = this.props
        const { mouseOn } = this.state
        return (
            <li className="item" style={{ backgroundColor: mouseOn ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{ display: mouseOn ? 'block' : 'none' }} >删除</button>
            </li>
        )
    }
}
