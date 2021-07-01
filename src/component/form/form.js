import React, { Component } from 'react';

class MyComponent extends Component {
  login = (event) => {
    const{username, password} = this.state
    alert("用户名:"+username+"，密码:"+password)
    event.preventDefault()
  }

  handleInput = (dataType,event) => {
    this.setState({[dataType]:event.target.value})
  }


  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input onChange={event => this.handleInput("username",event)} type="text" placeholder="用户名" name="username" /> &nbsp;
          <input onChange={event => this.handleInput("password",event)} type="password" placeholder="密码" name="password" /> &nbsp;
          <button>登录</button> &nbsp;
        </form>
      </div>
    );
  }

}

export default MyComponent;
