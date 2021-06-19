import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <input type="checkbox"></input> 
                已完成0 / 全部2
                <button className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
