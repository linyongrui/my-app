import React, { Component } from 'react'
import { NavLink, Route } from 'react-router-dom'
import Detail from './Detail'

export default class message extends Component {

    state = {
        msg: [
            { id: '001', title: 'message001' },
            { id: '002', title: 'message002' },
            { id: '003', title: 'message003' }
        ]
    }
    render() {
        return (

            <div>
                <ul>
                    {
                        this.state.msg.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>
                                    <NavLink to={`/home/message/detail?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr />
                <Route path="/home/message/detail" component={Detail}></Route>
            </div>
        )
    }
}
