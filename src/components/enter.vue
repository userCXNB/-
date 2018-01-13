<template>
<div class="index">
        <div class="header">
    		<div class="logo"><router-link to="/index"><img src="/src/assets/images/logo.jpg"></router-link></div>
            <div class="dh"><router-link to="/school">我的学校</router-link><router-link to="/history">去付款</router-link></div>
            <div class="top_right"><div class="pho"><a href="#"><img src="/src/assets/images/ico_pc.jpg"></a></div></div>    
        </div>
        <div class="list">
                <div class="xx_con">
                            <ul>
                                <li v-for="(item) of newCourseList" :key="item.id" @click="sendCourse(item)"><span>{{item.course}}</span><a href="#">${{item.price}}</a></li>
                            </ul>
                </div>
        </div>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return {
            courseList:[]
        }
    },
    methods:{
        ...mapActions([
            "sendCourse"
        ])
    },
  mounted(){
      this.$http({
          url:"http://localhost:3000/subject",
          method:"get"
      }).then((res)=>{
          console.log(res.data);
          this.courseList = res.data;  
      }).catch((res)=>{
          console.log(res,39)
      })
  },
  computed:{
      newCourseList(){
          return this.courseList;
      }
  }
}
</script>
<style>
@import url(/src/assets/css/enter.css);
</style>

