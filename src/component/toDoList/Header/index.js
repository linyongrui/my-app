import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {

    handleKeyUp = (event) => {
        const { keyCode, target } = event
        if (13 !== keyCode) return
        if (target.value === '') {
            alert('请先输入内容')
            return
        }
        this.props.addTodo({ id: nanoid(), done: false, name: target.value })
        target.value = ''
    }

    render() {

        return (
            <div className="header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车确认"></input>
            </div>
        )
    }
}
