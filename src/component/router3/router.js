import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

import About from './about/about'
import Home from './home/home'
import Header from './header'

export default class router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="row">
                        <div className="col-xs-offset-2 col-xs-8">
                            <Header/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-2 col-xs-offset-2">
                            <div className="list-group">
                                <NavLink activeClassName="activeLink" className="list-group-item" to="/about">About</NavLink>
                                <NavLink activeClassName="activeLink" className="list-group-item" to="./home">Home</NavLink>
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
