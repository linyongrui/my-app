import React, { Component } from 'react'
import {Switch, Redirect, Route} from 'react-router-dom'

import MyNavLink from '../MyNavLink'
import Message from './message'
import News from './news'

export default class home extends Component {
    render() {
        return (
            <div>
                <h2>Home组件内容</h2>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <Switch>
                                <Route path="/home/news" component={News}></Route>
                                <Route path="/home/message" component={Message}></Route>
                                <Redirect to='/home/news' />
                            </Switch>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
