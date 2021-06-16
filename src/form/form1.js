import React, { Component, createRef } from 'react';

class MyComponent extends Component {
  login = (event) => {
    console.log(this.text1)
    alert("用户名:"+this.text1.current.value+"，密码:"+this.text2.current.value)
    event.preventDefault()
  }

  text1 = createRef()
  text2 = createRef()

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input ref={this.text1} type="text" placeholder="用户名" name="username" /> &nbsp;
          <input ref={this.text2} type="password" placeholder="密码" name="password" /> &nbsp;
          <button>登录</button> &nbsp;
        </form>
      </div>
    );
  }

}

export default MyComponent;
