import React, { Component } from 'react'
import Pubsub from 'pubsub-js'

export default class index extends Component {

    state = {
        users: [],
        isFirst: true,
        isLoading: false,
        errorMsg: ''
    }

    componentDidMount() {
        this.token = Pubsub.subscribe('search user', (_, data) => {
            this.setState({ ...this.state, ...data })
        })
    }

    componentWillUnmount() {
        Pubsub.unsubscribe(this.token)
    }

    render() {
        const { isFirst, isLoading, errorMsg, users } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>请输入关键字，搜索用户</h2> :
                        isLoading ? <h2>加载中.....</h2> :
                            errorMsg ? <h2 style={{ color: 'red' }}>{errorMsg}</h2> :
                                users.length === 0 ? <h2>列表为空</h2> :
                                    users.map(
                                        (userObj) => {
                                            return (
                                                <div key={userObj.id} className="card">
                                                    <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                        <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                                    </a>
                                                    <p className="card-text">{userObj.login}</p>
                                                </div>
                                            )
                                        }
                                    )
                }
            </div>
        )
    }
}
