import React, { Component, createRef } from 'react';

class MyComponent extends Component {
  login = (event) => {
    const{username, password} = this.state
    alert("用户名:"+username+"，密码:"+password)
    event.preventDefault()
  }

  handleUsername = (event) => {
    this.setState({username : event.target.value})
  }

  handlePassword = (event) => {
    this.setState({password : event.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input onChange={this.handleUsername} type="text" placeholder="用户名" name="username" /> &nbsp;
          <input onChange={this.handlePassword} type="password" placeholder="密码" name="password" /> &nbsp;
          <button>登录</button> &nbsp;
        </form>
      </div>
    );
  }

}

export default MyComponent;
