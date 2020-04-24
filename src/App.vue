<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
    <tabbar />
  </div>
</template>
<script>
import Tabbar from "components/contents/mainTabbar/mainTabbar";
export default {
  components: {
    Tabbar
  }
};
</script>
<style>
@import "assets/css/base.css";
</style>
