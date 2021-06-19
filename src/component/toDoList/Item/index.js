import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouseOn: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({mouseOn:flag})
        }
    }

    render() {
        const { name, done } = this.props
        const { mouseOn } = this.state
        return (
            <li className="item" style={{ backgroundColor: mouseOn ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={done} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouseOn ? 'block' : 'none' }} >删除</button>
            </li>
        )
    }
}
