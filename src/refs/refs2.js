import React, { Component } from 'react';

class MyRefs extends Component {
  showData = () => {
    console.log(this)
    const { text1 } = this;
    alert(text1.value)
  }

  showData2 = () => {
    console.log(this)
    const { text2 } = this;
    alert(text2.value)
  }

  render() {
    return (
      <div>
        <input ref={c => this.text1 = c } type="text" placeholder="点击按钮提示数据" /> &nbsp;
        <button onClick={this.showData}>点我提示左侧数据</button> &nbsp;
        <input ref={c => this.text2 = c } onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    );
  }

}

export default MyRefs;
