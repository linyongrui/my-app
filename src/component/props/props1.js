import { Component } from 'react';

class MyProps extends Component {

  render() {
    console.log(this)
    return (
      <ul>
        <li>姓名：{this.props.name}</li>
        <li>性别：{this.props.sex}</li>
        <li>年龄：{this.props.age+1}</li>
      </ul>
    );
  }

}

export default MyProps;
