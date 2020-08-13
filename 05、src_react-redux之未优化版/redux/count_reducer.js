// 为count服务的reducer
import {INCREMENT,DECREMENT} from './constant'

const initState = 100
/**
 * preState用于加工Count组件的状态
 * @param {*} preState 
 * @param {*} action  动作对象
 */
function countReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data   
        default:
            return preState
    }
}
// 暴露出去
export default countReducer
