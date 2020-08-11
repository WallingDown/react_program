import React, { Component } from 'react'

export default class Count extends Component {
    state = {
        count:0
    }

    // 加
    increment = () =>{
        // 1、获取用户输入
        const {value} = this.refs.selectedNumber
        // 2、获取原状态
        const {count} = this.state
        // 3、执行后，更新状态
        this.setState({count:count + value *1})
    }

    decrement = () =>{
         // 1、获取用户输入
         const {value} = this.refs.selectedNumber
         // 2、获取原状态
         const {count} = this.state
         // 3、执行后，更新状态
         this.setState({count:count - value *1})
    }

    incrementIfOdd = () =>{
        if (this.state.count % 2 !== 0) {
              // 1、获取用户输入
                const {value} = this.refs.selectedNumber
                // 2、获取原状态
                const {count} = this.state
                // 3、执行后，更新状态
                this.setState({count:count + value *1})
        }
    }

    incrementWait = () =>{
        setTimeout(()=>{
             // 1、获取用户输入
             const {value} = this.refs.selectedNumber
             // 2、获取原状态
             const {count} = this.state
             // 3、执行后，更新状态
             this.setState({count:count + value *1})
        },500)
    }

    render() {
        return (
            <div>
                <h1>当前的和为:{this.state.count}</h1>
                <select ref="selectedNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>若为奇数 +</button>
                <button onClick={this.incrementWait}>等一等 +</button>
            </div>
        )
    }
}
