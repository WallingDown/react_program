// 引入UI组件
import CountUI from '../components/Count'
// 引入connect
import {connect} from 'react-redux'
// 引入action
import {incrementAction,decreateAction,incrementWaitAction} from '../redux/count_action'

function mapStateToProps(state){
    return {count:state}
}
function mapDispatchToProps(dispatch){
    return {
        increment:(number)=>{dispatch(incrementAction(number))},
        decrement:(number)=>{dispatch(decreateAction(number))},
        incrementWait:(number)=>{dispatch(incrementWaitAction(number))}
    }
}
// 暴露connect()()生成的容器组件
export default  connect(mapStateToProps,mapDispatchToProps)(CountUI) 
