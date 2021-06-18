import React, { Component } from 'react';

class MyRefs extends Component {
  state = { isHot: true }

  showData = () => {
    const { text1 } = this;
    alert(text1.value)
  }

  changeWeather = () => {
    const { isHot } = this.state
    this.setState({ isHot: !isHot })
  }

  saveInput = (c) => {
    this.text1 = c;
    console.log('@', c)
  }

  render() {
    const { isHot } = this.state
    return (
      <div>
        <h2>今天天气很{isHot ? '炎热' : '凉爽'}</h2>
        <input ref={this.saveInput} type="text" placeholder="点击按钮提示数据" /> &nbsp;
        <button onClick={this.showData}>点我提示左侧数据</button> &nbsp;
        <button onClick={this.changeWeather}>点我切换天气</button> &nbsp;
      </div>
    );
  }

}

export default MyRefs;
