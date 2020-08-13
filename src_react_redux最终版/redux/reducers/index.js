// 汇总所有的reducer，暴露出去一个总的reducer

// 引入combineReducers用于汇总reducers
import {combineReducers} from 'redux'

// 引入countReducer  用于加工Count的状态
import countReducer from './count'
// 引入personReducer  用于加工person的状态
import personReducer from './person'


// combineReducers所传入的对象，就是redux的总状态对象！！！
const allReducers = combineReducers({
    count:countReducer,
    persons:personReducer
})
export default allReducers