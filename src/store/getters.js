let getters = {
     getNav(state){
         return state.bNav
     },
     getCourse(state){
        return state.courseList
     },
     getCome(state){
         return state.come
     },
     getLoading(state){
        return state.loading
     },
     getSidebar(state){
         return state.sidebar
     }
}
export default getters;