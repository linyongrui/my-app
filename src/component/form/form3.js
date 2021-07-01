import React, { Component, createRef } from 'react';

class MyComponent extends Component {
  login = (event) => {
    const{username, password} = this.state
    alert("用户名:"+username+"，密码:"+password)
    event.preventDefault()
  }

  handleInput = (dataType) => {
    return (event) => {
      this.setState({[dataType]:event.target.value})
    }
  }


  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input onChange={this.handleInput("username")} type="text" placeholder="用户名" name="username" /> &nbsp;
          <input onChange={this.handleInput("password")} type="password" placeholder="密码" name="password" /> &nbsp;
          <button>登录</button> &nbsp;
        </form>
      </div>
    );
  }

}

export default MyComponent;
