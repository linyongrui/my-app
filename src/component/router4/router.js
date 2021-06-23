import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import About from './about/about'
import Home from './home/home'
import Header from './header'
import MyNavLink from './MyNavLink'

export default class router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <Header />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <MyNavLink to="/about">About</MyNavLink>
                                <MyNavLink to="./home">Home</MyNavLink>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="panel">
                                <div className="panel-body">
                                    <Route path="/about" component={About}></Route>
                                    <Route path="/home" component={Home}></Route>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}
