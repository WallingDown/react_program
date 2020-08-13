import {ADD_PERSON} from '../constant'

// 第一一个初始数据
const initState = [{id:'001',name:'小白',age:18}]

function personReducer (perState=initState,action){
    const {type,data} = action
    switch (type) {
        case ADD_PERSON:
            return [data,...perState]
        default:
            return perState
    }
}

// 暴露personReducer
export default personReducer