import React, { Component } from 'react'

import qs from 'querystring'

export default class Detail extends Component {

    state = {
        msgContent: [
            { id: '001', content: 'message001 content....' },
            { id: '002', content: 'message002 content....' },
            { id: '003', content: 'message003 content....' }
        ]
    }

    render() {

        const {id, title} = qs.parse(this.props.location.search.slice(1))
        const detailObj = this.state.msgContent.find((msgObj) => {
            return msgObj.id === id
        })

        return (
            <ul>
                <li>id:{id}</li>
                <li>title:{title}</li>
                <li>content:{detailObj.content}</li>
            </ul>
        )
    }
}
