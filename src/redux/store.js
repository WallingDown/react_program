// 引入createStore，创建redux最核心对象
import {createStore,applyMiddleware} from 'redux'
// 引入插件 使用redux开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入thunk  用于支持异步的action
import thunk from 'redux-thunk'
// 引入汇总完的reducer
import allReducers from './reducers/index'

//#region 
/*  applyMiddleware的作用是让store认可异步action的写法
    allReducers是将所有的reduce汇总之后的reducer————借助 combineReducers 汇总   */
//#endregion
const store = createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))

// 暴露store对象出去
export default store