import { Component } from 'react';

class Mystate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isHot: true
    }
  }

  render() {
    console.log(this)
    const { isHot } = this.state;
    return (
      <h1 id="title">今天天气很{isHot ? "炎热" : "凉爽"} </h1>
    );
  }
  componentDidMount() {
    const title = document.getElementById("title")

    // title.addEventListener('click', ()=>{
    //   console.log("标题被点击了")
    // })

    title.onclick = () => {
      console.log('标题被点击了')
    }
  }

}

export default Mystate;
