<template>
  <div class="index">
    <div class="header">
      <div class="logo">
        <a @click="sendSidebar({left:0})"><img src="/src/assets/images/logo.jpg"></a>
      </div>
      <div class="dh"><a href="javascript:;">我的学校</a>
      </div>
      <div class="top_right">
        <div class="pho">
          <a href="#"><img src="/src/assets/images/ico_pc.jpg"></a>
        </div>
      </div>
    </div>
    <div class="list2">
      <div class="wdxx">
        <div class="tit"><span class="sj">Deadline</span><span class="xx">学校</span></div>
        <div class="con">
          <ul>
            <li>
              <router-link to="/enter">
                <div class="wt">
                  <p class="time">2018-8-21</p>
                  <p class="xx">上海复旦</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/enter">
                <div class="wt">
                  <p class="time">2018-8-21</p>
                  <p class="xx">北京大学</p>
                </div>
              </router-link>
            </li>
            <li>
              <router-link to="/enter">
                <div class="wt">
                  <p class="time">2018-8-21</p>
                  <p class="xx">浙江大学</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex';
    export default {
        methods:mapActions([
            "sendSidebar"
        ])
    }
</script>
<style>
  @import url(/src/assets/css/school.css);
</style>
