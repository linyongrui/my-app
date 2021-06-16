import React, { Component, createRef } from 'react';

class MyRefs extends Component {
  showData = () => {
    console.log(this.text1)
    alert(this.text1.current.value)
  }

  showData2 = () => {
    console.log(this.text2)
    alert(this.text2.current.value)
  }

  text1 = createRef()
  text2 = createRef()

  render() {
    return (
      <div>
        <input ref={this.text1} type="text" placeholder="点击按钮提示数据" /> &nbsp;
        <button onClick={this.showData}>点我提示左侧数据</button> &nbsp;
        <input ref={this.text2} onBlur={this.showData2} type="text" placeholder="失去焦点提示数据" />
      </div>
    );
  }

}

export default MyRefs;
