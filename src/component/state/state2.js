import { Component } from 'react';

class Mystate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isHot: true
    }
  }

  render() {
    const { isHot } = this.state;
    // const myClick = ()=> {
    //   console.log('标题被点击了')
    //   console.log(this)
    //   this.setState({...this.state,isHot:!isHot})
    // }
    return (
      <h1 onClick={this.myClick} >今天天气很{isHot ? "炎热" : "凉爽"} </h1>
    );
  }

  myClick = () => {
    console.log('标题被点击了')
    console.log(this)
    this.setState({
      isHot:!this.state.isHot
    })
  }

  componentDidMount() {
  }

}

export default Mystate;
