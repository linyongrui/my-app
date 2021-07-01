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

    myPush = (id, title) => {
        // this.props.history.push(`/home/message/detail/${id}/${title}`);

        this.props.history.push(`/home/message/detail?id=${id}&title=${title}`);

        // this.props.history.push(`/home/message/detail`, { id, title });

    }

    myReplace = (id, title) => {
        // this.props.history.replace(`/home/message/detail/${id}/${title}`);

        this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`);

        // this.props.history.replace(`/home/message/detail`, { id, title });

    }

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
        return (

            <div>
                <ul>
                    {
                        this.state.msg.map((msgObj) => {
                            return (
                                <li key={msgObj.id}>

                                    {/* 向路由组件传递params参数 */}
                                    {/* <NavLink to={`/home/message/detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</NavLink> */}

                                    {/* 向路由组件传递search参数 */}
                                    <NavLink to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</NavLink>

                                    {/* 向路由组件传递state参数 */}
                                    {/* <NavLink to={{ pathname: '/home/message/detail', state: { id: msgObj.id, title: msgObj.title } }}>{msgObj.title}</NavLink>&nbsp; */}
                                    <button onClick={() => this.myPush(msgObj.id, msgObj.title)}>push</button>&nbsp;
                                    <button onClick={() => this.myReplace(msgObj.id, msgObj.title)}>replace</button>  &nbsp;
                                </li>

                            )
                        })
                    }
                </ul>

                <hr />
                {/* 声明接收params参数 */}
                {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

                {/* search参数无需声明接收，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />

                {/* state参数无需声明接收，正常注册路由即可 */}
                {/* <Route path="/home/message/detail" component={Detail}></Route> */}

                <button onClick={this.myForward}>myForward</button>  &nbsp;
                <button onClick={this.myBackward}>myBackward</button>  &nbsp;
                <button onClick={this.myGo}>go</button>  &nbsp;
            </div>
        )
    }
}
