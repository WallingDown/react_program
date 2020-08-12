// 引入UI组件
import CountUI from '../components/Count'
// 引入connect
import { connect } from 'react-redux'
// 引入actionCreator
import {
    incrementAction,
    decreateAction,
    incrementWaitAction
} from '../redux/count_action'

// 暴露connect()()生成的容器组件
export default connect(
    state => ({ count: state }),
    {
        increment: incrementAction,
        decrement: decreateAction,
        incrementWait: incrementWaitAction
    }
)(CountUI) 
