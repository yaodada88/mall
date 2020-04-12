<template>
  <div id="app">
    <router-view></router-view>
  <tabbar />
  </div>
</template>
<script>
import Tabbar from 'components/contents/mainTabbar/mainTabbar'
export default {
  components:{
    Tabbar
  }
}
</script>
<style>
@import  'assets/css/base.css';
</style>
