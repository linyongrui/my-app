import React, { Component } from 'react'

export default class index extends Component {
    render() {
        const { users } = this.props
        return (
            <div className="row">
                {
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
