import React, { Component } from 'react'
 
export default class Count extends Component {
    state = {
        // count:0
        name:'小白'
    }

    // 加
    increment = () =>{
        // 1、获取用户输入
        const {value} = this.refs.selectedNumber
        // 2、获取原状态
        // const {count} = this.state
        // 3、执行后，更新状态
        // this.setState({count:count + value *1})
        this.props.increment(value*1)
    }

    // 减
    decrement = () =>{
         // 1、获取用户输入
         const {value} = this.refs.selectedNumber
         // 2、获取原状态
        //  const {count} = this.state
         // 3、执行后，更新状态
        //  this.setState({count:count - value *1})
        this.props.decrement(value*1)
    }

    // 奇数加
    incrementIfOdd = () =>{
        if (this.props.count % 2 !== 0) {
              // 1、获取用户输入
                const {value} = this.refs.selectedNumber
                // 2、获取原状态
                // const {count} = this.state
                // 3、执行后，更新状态
                // this.setState({count:count + value *1})
                this.props.increment(value*1)
        }
    }

    // 等一等再加
    incrementWait = () =>{
             // 1、获取用户输入
             const {value} = this.refs.selectedNumber
             // 2、获取原状态
            //  const {count} = this.state
             // 3、执行后，更新状态
            //  this.setState({count:count + value *1})
            this.props.incrementWait(value*1)
    }

    render() {
        return (
            <div style={{marginLeft:'500px'}}>
                <h1>{this.state.name}当前的和为:{this.props.count}</h1>
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
