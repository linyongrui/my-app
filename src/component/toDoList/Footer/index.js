import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

    handleChange = (e) => {
        this.props.checkAll(e.target.checked)
    }

    handleClearAll = () => {
        this.props.clearAll()
    }



    render() {
        const { todos } = this.props
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const allCount = todos.length

        const allDone = allCount !== 0 && allCount === doneCount

        return (
            <div className="footer">
                <input type="checkbox" checked={allDone} onChange={this.handleChange}></input>
                已完成{doneCount} / 全部{allCount}
                <button className="btn btn-danger" onClick={this.handleClearAll}>清除已完成任务</button>
            </div>
        )
    }
}
