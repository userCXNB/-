<template>
  <div>
    <vue-loading type="beat" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
  </div>
</template>
<script>
  import vueLoading from 'vue-loading-template';
  export default {
    components: {
      vueLoading
    }
  }
</script>
<style>
  .vue-loading {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
