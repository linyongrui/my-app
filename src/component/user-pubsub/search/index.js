
import React, { Component } from 'react'
import axios from 'axios'
import Pubsub from 'pubsub-js'


export default class index extends Component {

  //用方法三要用async： handleSearch = async() => {
  handleSearch = () => {
    const { keyWordElement: { value: keyWord } } = this
    if (keyWord === '') {
      alert('请先输入关键字')
      return
    }
    Pubsub.publish('search user', { isFirst: false, isLoading: true })

    // 方法一：
    // axios.get(`/api3/search/users?q=${keyWord}`).then(
    //   response => {
    //     Pubsub.publish('search user', { isLoading: false, users: response.data.items })
    //   },
    //   error => {
    //     Pubsub.publish('search user', { isLoading: false, errorMsg: error.message })
    //   }
    // )

    // 方法二：
    fetch(`/api3/search/users?q=${keyWord}`).then(
			response => {
				console.log('联系服务器成功了');
				return response.json()
			},
			error => {
				console.log('联系服务器失败了',error);
				return new Promise(()=>{})
			}
		).then(
			response => {console.log('获取数据成功了',response);},
			error => {console.log('获取数据失败了',error);}
		) 
    
    // 方法三：
		// try {
		// 	const response= await fetch(`/api3/search/users?q=${keyWord}`)
		// 	const data = await response.json()
		// 	// console.log(data);
		// 	Pubsub.publish('search user',{isLoading:false,users:data.items})
		// } catch (error) {
		// 	console.log('请求出错',error);
		// 	Pubsub.publish('search user',{isLoading:false,err:error.message})
		// }

  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref={(c) => { this.keyWordElement = c }} />&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
