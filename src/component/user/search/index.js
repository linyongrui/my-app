
import React, { Component } from 'react'
import axios from 'axios'


export default class index extends Component {

  handleSearch = () => {
    const { keyWordElement: { value: keyWord } } = this
    if (keyWord === '') {
      alert('请先输入关键字')
      return
    }
    this.props.updateUsers({ isFirst: false, isLoading: true })

    axios.get(`/api3/search/users?q=${keyWord}`).then(
      response => {
        this.props.updateUsers({ isLoading: false, users: response.data.items })
      },
      error => {
        this.props.updateUsers({ isLoading: false, errorMsg: error.message })
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={(c) => { this.keyWordElement = c }} />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
