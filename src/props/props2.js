import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyProps extends Component {


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

MyProps.proptype = {
  age: PropTypes.number,
  name: PropTypes.string.isRequired,
  sex: PropTypes.string
}

MyProps.defaultProps = {
  sex: '男'
}

export default MyProps;
