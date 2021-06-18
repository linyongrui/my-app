import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MyStyle from './style.css'

class MyComponent extends Component {

    state = {
        newsArr: []
    }


    static getDerivedStateFromProps(prop, state) {
        console.log("getDerivedStateFromProps", prop, state)
        return null
    }

    getSnapshotBeforeUpdate(preProp, preState) {
        console.log("getSnapshotBeforeUpdate", preProp, preState)
        return this.refs.list.scrollHeight;
    }

    componentDidMount() {
        console.log("componentDidMount")
        setInterval(() => {
            const {newsArr} = this.state
            const news = '新闻'+(newsArr.length+1)
            this.setState({newsArr:[news,...newsArr]})
        }, 1000);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    componentDidUpdate(preProp, preState, snapshot) {
        console.log("componentDidUpdate", preProp, preState, snapshot)
        this.refs.list.scrollTop += this.refs.list.scrollHeight - snapshot
    }
    
    render() {
        console.log("render")
        return (
            <div className="list" ref="list">
                {
                    this.state.newsArr.map((n, index) =>{
                        console.log(n)
                        return <div key={index} className="news">{n}</div>
                    })
                }
            </div>
        )
    }

}

export default MyComponent;