import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class MyComponent extends Component {

    state = {
        opacity: 1
    }
    death = () => {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.timer = setInterval(() => {
            let { opacity } = this.state
            opacity = opacity >= 0 ? opacity - 0.1 : 1
            this.setState({ opacity })
        }, 200);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
        clearInterval(this.timer)
    }

    render() {

        return (
            <div>
                <h2 style={{ opacity: this.state.opacity }}>React学不会怎么办？</h2>
                <button onClick={this.death}>不活了</button>
            </div>
        )
    }

}

export default MyComponent;