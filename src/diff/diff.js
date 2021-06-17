import { Component } from "react";

export default class MyComponent extends Component {

    state = {
        nowTime: new Date()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ nowTime: new Date() })
        }, 1000);
    }

    render() {
        console.log("render")

        return (
            <div>
                <h2>Diff Demo</h2>
                <input type="text"></input>
                <div>现在是：{this.state.nowTime.toTimeString()}</div>
            </div>
        )
    }
}