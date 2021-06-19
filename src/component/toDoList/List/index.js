import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        const { todos } = this.props

        return (
            <div className="list">
                <ul>
                    {
                        todos.map(
                            todo => {
                                return <Item key={todo.id} {...todo} />
                            }
                        )
                    }
                </ul>

            </div>
        )
    }
}
