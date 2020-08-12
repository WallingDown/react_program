// 引入createStore，创建redux最核心对象
import {createStore,applyMiddleware} from 'redux'
// 引入countReducer  加工Count的状态
import countReducer from './count_reducer'
// 
import thunk from 'redux-thunk'
// 
const store = createStore(countReducer,applyMiddleware(thunk))
// 暴露出去
export default store