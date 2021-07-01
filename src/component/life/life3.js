import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends Component {

    state = {
        count: 0
    }

    add = () => {
        const { count } = this.state
        this.setState({ count: count + 1 })
    }

    UNSAFE_componentWillMount() {
        console.log("componentWillMount")

    }

    componentDidMount() {
        console.log("componentDidMount")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        return true
    }

    UNSAFE_componentWillUpdate() {
        console.log("componentWillUpdate")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    force = () => {
        this.forceUpdate()
    }

    render() {
        console.log("render")

        return (
            <div>
                <h2>当前求和为：{this.state.count}</h2>
                <button onClick={this.add}>点我+1</button>
                <button onClick={this.death}>卸载组件</button>
                <button onClick={this.force}>强制更新</button>
            </div>
        )
    }

}

export default MyComponent;