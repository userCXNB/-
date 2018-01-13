<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        <a @click="sendSidebar({left:0})"><img src="/src/assets/images/logo.jpg"></a>
      </div>
      <div class="dh"><router-link to="/apply">我的申请</router-link></div>
      <div class="top_right">
        <div class="pho">
          <a href="#"><img src="/src/assets/images/ico_pc.jpg"></a>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="sq_con">
        <ul>
          <template v-for="(val,index) in monthList">
                  <li @click.stop = "show($event,index)"><span class="blue">{{val.month}}</span></li>
                  <div class="sub_li" :key="index" :style="bl[index]">
                    <p v-for="(item) in val.material"><router-link :to="val.path">{{item}}</router-link></p>
                  </div>
           </template>
          </ul>
        </div>
      </div>
</div>
</template>
<script>
import {mapActions} from 'vuex';
  export default {
    data() {
      return {
        monthList:[],
        bl:[]
      }
    },
     mounted(){
      this.$http({
          url:"http://localhost:3000/apply",
          method:"get"
      }).then((res)=>{
          console.log(res.data)
          res.data.forEach((val,ind) => {
              this.bl.push('height:0;')
          });
          console.log(this.bl)
          this.monthList = res.data;  
      }).catch((res)=>{
          console.log(res,39)
      })
  },
    methods: {
      show(ev,ind) {

         this.bl.fill('height:0;',0,this.bl.length)
         this.bl.splice(ind,1,'height:260px;')
        // if(ev.path[0].tagName.toLowerCase()=="li"){                
        //   var temp = ev.path[0].nextSibling.nextSibling.style.height=="0px" ? "260px":"0px";
        //   ev.path[0].nextSibling.nextSibling.style.height = temp;
        //  }
        // else{
        //   var temp = ev.path[0].parentNode.nextSibling.nextSibling.style.height == "0px" ? "260px":"0px";
        //   ev.path[0].parentNode.nextSibling.nextSibling.style.height = temp;
        // }
      

      },
      ...mapActions([
            "sendSidebar"
        ])
    }
  }
</script>
<style>
  @import url(/src/assets/css/apply.css);
</style>
