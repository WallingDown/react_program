import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPersonAction} from '../redux/actions/person'

// person的UI组件
class Person extends Component {

    addPerson = () =>{
        // 连续解构并重命名
        const {nameNode:{value:name},ageNode:{value:age}} = this.refs
        if (!name || !age) {
            alert('姓名和年龄不能为空！')
            return
        }
        // 通知redux增加一个人
        this.props.addPerson({id:Date.now(),name,age})
        // 清空：
        this.refs.nameNode.value = ''
        this.refs.ageNode.value = ''
    }

    render() {
        return (
            <div style={{marginLeft:'500px'}}>
                <h1>我是Person组件，上方的组件求和为：<span style={{color:'red'}}>{this.props.count}</span></h1>
                <input type="text" ref="nameNode" placeholder="请输入姓名："/>
                <input type="text" ref="ageNode" placeholder="请输入年龄："/>
                <button onClick={this.addPerson}>
                    添加一个人
                </button>
                <ul>
                    {
                        this.props.persons.map((personObj)=>{
                            return (
                                <li key={personObj.id}>
                                    姓名：{personObj.name}，年龄：{personObj.age}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    // 映射状态
    state => ({
        count:state.count,
        persons:state.persons
    }),
    // 映射操作状态的方法
    {
        addPerson:addPersonAction
    }
)(Person)