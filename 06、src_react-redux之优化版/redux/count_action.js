// 定义为Count组件服务器的actionCreator
// 专门用于创建和组件相关的action对象

import {INCREMENT,DECREMENT} from './constant'
// 1、创建加的action
export const incrementAction = number => ({type:INCREMENT,data:number})
///2、创建减的action
export const decreateAction = number => ({type:DECREMENT,data:number})
// 3、创建等一等再加的action
export const incrementWaitAction = number => {
    return(dispatch) =>{
        // 这里用了一个setTimeOut模拟一个异步代码，
        // 在以后用的就是真实的ajax请求了
        setTimeout(()=>{
            dispatch(incrementAction(number))
        },1000)
    }
}