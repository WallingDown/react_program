import React, { Component } from 'react'

// 引入antd UI库的部分功能
import {Input,Button,message} from 'antd'
// 引入antd UI的样式
// import 'antd/dist/antd.css'
import './App.less'


export default class App extends Component {
  show = () =>{
    message.error('我是错误的消息')
    message.success('成功')
    message.warning('警告！！！！！')
  }
  render() {
    return (
      <div>
          <Input type="text" placeholder="请输入内容" style={{width:"200px"}}/>
          <Button>点我！！</Button>
          <Button type="primary">按钮1</Button>
          <Button type="danger" onClick={this.show}>展示</Button>
          <div className="demo"></div>
      </div>
    )
  }
}
