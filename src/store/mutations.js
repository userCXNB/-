import * as types from './types'

let mutations = {
     [types.HIDE_NAV]:(state)=>{state.bNav = false},
     [types.SEND_COURSE]:(state,payload)=>{state.courseList=payload},
     [types.ADD]:(state,payload)=>{state.courseList=payload},
     [types.COME]:(state,payload)=>{state.come=payload},
     [types.MINUS]:(state,payload)=>{state.courseList=payload},
     [types.DEL]:(state,payload)=>{state.courseList=payload;},
     [types.SHOW_LOADING]:(state,payload)=>{state.loading=payload},
     [types.HIDE_LOADING]:(state,payload)=>{state.loading=payload},
     [types.SEND_SIDEBAR]:(state,payload)=>{state.sidebar=payload}
}
export default mutations;