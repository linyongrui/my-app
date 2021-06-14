import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyProps extends Component {
  static propTypes = {
    age: PropTypes.number,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string
  }

  static defaultProps = {
    sex: '男'
  }

  render() {
    console.log(this)
    const { name, sex, age } = this.props
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age + 1}</li>
      </ul>
    );
  }

}

// MyProps.propTypes = {
//   age: PropTypes.number,
//   name: PropTypes.string.isRequired,
//   sex: PropTypes.string
// }

export default MyProps;
