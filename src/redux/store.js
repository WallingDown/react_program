// 引入createStore，创建redux最核心对象
import {createStore,applyMiddleware,combineReducers} from 'redux'
// 引入countReducer  用于加工Count的状态
import countReducer from './reducers/count'
// 引入personReducer  用于加工person的状态
import personReducer from './reducers/person'
// 引入thunk  用于支持异步的action
import thunk from 'redux-thunk'

// combineReducers所传入的对象，就是redux的总状态对象！！！
const allReducers = combineReducers({
    he:countReducer,
    rens:personReducer
})


// applyMiddleware的作用是让store认可异步action的写法
const store = createStore(allReducers,applyMiddleware(thunk))

// 暴露store对象出去
export default store