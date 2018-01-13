import * as types from './types';
let actions = {
    hideNav:({commit,state})=>{commit(types.HIDE_NAV)},
    sendCourse:({commit,state},payload)=>{
        console.log(payload)
        var newList = state.courseList.slice();
        //  如果是第一次就放在数组中，多次就num++
        var find = true;
        if(newList.length==0){
            newList.push(payload)   
        }else{
            newList.forEach((item,index)=>{
               console.log(item.id)
                if(item.id==payload.id){
                    item.num++;
                    find = false;
                }
            })
            if(find){
                newList.push(payload)  
            }
        }

         commit(types.SEND_COURSE,newList)

        //算合计
        var newList = state.courseList.slice()
        var come=0;
        newList.forEach((item,index)=>{
             come += item.num*item.price
        })
        commit(types.COME,come)


    },
    add:({commit,state},payload)=>{
        var newList = state.courseList.slice()
        newList[payload].num++
        var come=0;
        newList.forEach((item,index)=>{
             come += item.num*item.price
        })
        commit(types.COME,come)
      commit(types.ADD,newList)
    },
    minus:({commit,state},payload)=>{
        var newList = state.courseList.slice()
        newList[payload].num<=1? newList[payload].num:newList[payload].num--      
        var come=0;
        newList.forEach((item,index)=>{
             come += item.num*item.price
        })
        commit(types.COME,come)
        commit(types.MINUS,newList)
        
    },
    del:({commit,state},payload)=>{
        console.log(state.courseList)
        state.courseList.splice(payload,1)
        var newList = state.courseList.slice()
        var come=0;
        newList.forEach((item,index)=>{
             come += item.num*item.price
        })
        commit(types.COME,come)
        commit(types.DEL,[...state.courseList])
    },
    showLoading:({commit,state})=>{
        commit(types.SHOW_LOADING,true)},
    hideLoading:({commit,state})=>{commit(types.HIDE_LOADING,false)},
    sendSidebar:({commit,state},payload)=>{commit(types.SEND_SIDEBAR,payload)}
}

export default actions;