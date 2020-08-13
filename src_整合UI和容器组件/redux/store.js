// 引入createStore，创建redux最核心对象
import {createStore,applyMiddleware} from 'redux'
// 引入countReducer  用于加工Count的状态
import countReducer from './count_reducer'
// 引入thunk  用于支持异步的action
import thunk from 'redux-thunk'

// applyMiddleware的作用是让store认可异步action的写法
const store = createStore(countReducer,applyMiddleware(thunk))

// 暴露store对象出去
export default store