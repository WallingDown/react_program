import {ADD_PERSON} from '../constant'

// 添加一个人的action
export const addPersonAction = personObj => ({type:ADD_PERSON,data:personObj})