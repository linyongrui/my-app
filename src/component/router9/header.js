import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {

    myForward = () => {
        this.props.history.goForward();
    }

    myBackward = () => {
        this.props.history.goBack();
    }

    myGo = () => {
        this.props.history.go(-2);
    }

    render() {
        // console.log("header", this.props)

        return (
            <div className="page-header">
                <h2>React Router Demo</h2>
                <br />

                <button onClick={this.myForward}>myForward</button>  &nbsp;
                <button onClick={this.myBackward}>myBackward</button>  &nbsp;
                <button onClick={this.myGo}>go</button>  &nbsp;
            </div>
        )
    }
}

export default withRouter(Header)