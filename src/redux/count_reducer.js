// 为count服务的reducer

const initState = 0
/**
 * preState用于加工Count组件的状态
 * @param {*} preState 
 * @param {*} action  动作对象
 */
function countReducer(preState=initState,action){
    const {type,data} = action
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data   
        default:
            return preState
    }
}

