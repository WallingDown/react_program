// 引入createStore，创建redux最核心对象
import {createStore} from 'redux'
// 引入countReducer  加工Count的状态
import countReducer from './count_reducer'
// 
const store = createStore(countReducer)
// 暴露出去
export default store