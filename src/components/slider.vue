<template>
  <swipe class="my-swipe">
    <swipe-item class="slide1">
      <a href="#" target="_blank"><img src="/src/assets/images/pic_1.jpg"></a>
    </swipe-item>
    <swipe-item class="slide2">
      <a href="#" target="_blank"><img src="/src/assets/images/pic_1.jpg"></a>
    </swipe-item>
    <swipe-item class="slide3">
      <a href="#" target="_blank"><img src="/src/assets/images/pic_1.jpg"></a>
    </swipe-item>
  </swipe>
</template>
<script>
  import {
    Swipe,
    SwipeItem
  } from 'vue-swipe';
  export default {
    components: {
      'swipe': Swipe,
      'swipe-item': SwipeItem
    }
  }
</script>
<style>
  .my-swipe {
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .slide1 {
    background-color: #0089dc;
    color: #fff;
  }
  .slide2 {
    background-color: #ffd705;
    color: #000;
  }
  .slide3 {
    background-color: #ff2d4b;
    color: #fff;
  }
</style>
