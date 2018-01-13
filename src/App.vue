<template>
  <div id="app">
    <load v-show="getLoading"></load>
   <div class="sidebar" :style="getSidebar" @click="sendSidebar({left:'-50%'})">
      <ul>
        <router-link tag="li" to="/index" >我的首页</router-link>        
        <router-link tag="li" to="/apply" >我的申请</router-link>
        <router-link tag="li" to="/school">我的学校</router-link>
        <router-link tag="li" to="/consultant">我的顾问</router-link>
        <router-link tag="li" to="/login">登录</router-link>
        <router-link tag="li" to="/register">注册</router-link>
      </ul>
    </div>
    <index v-show="getNav"></index>
    <transition enter-active-class="animated rotateInUpRight">
      <!--<keep-alive>-->
      <router-view></router-view>
      <!--</keep-alive>-->
    </transition>
    <foot></foot>
  </div>
</template>

<script>
  import index from './components/index';
  import load from './components/loading';
  import foot from './components/foot';
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'app',
    components: {
      index,
      foot,
      load
    },
    watch: {
      $route(route) {
        console.log(route.path);
        this.conState();
      }
    },
    mounted() {
      this.conState();
    },
    methods: {
      ...mapActions([
        "sendSidebar"  
      ]),
      conState(path) {
        this.$store.dispatch('hideNav');
      }

    },
    computed: mapGetters([
      'getNav', "getLoading","getSidebar"
    ])
  }  
</script>

