<template>
  <div>
    <nav-bar >
      <div slot="left" class="navImg" @click="handleBack">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="nav-center">
          <div v-for="(item,index) in navList" 
          :key="index" 
          class="nav-item" 
          :class="{navActive:activeIndex == index}"
          @click="handleNavActive(index)">{{item}}</div>
      </div>
    </nav-bar>
    <detail-swiper :topImages='topImages' />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";

import DetailSwiper from './childCpns/detailSwiper'

import {getDetail} from 'network/detail'
export default {
  name: "detail",
  data() {
    return {
      iid: null,
      navList:["商品","参数","评论","推荐"],
      activeIndex:0,
      topImages:[]
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res=>{
      console.log(res);
      this.topImages=res.result.itemInfo.topImages
    })
  },
  methods:{
    handleNavActive(index){
      this.activeIndex = index;
    },
    handleBack(){
      this.$router.back();
    }
  },
  watch: {
    $route(to, from) {
      this.iid=to.params.iid
    }
  },
  components:{
    NavBar,
    DetailSwiper
  }
};
</script>
<style scoped>
.nav-center{
  display: flex;
}
.nav-item{
  flex: 1;
  text-align: center;
}
.navImg{
  margin-top: 6px;;
}
.navActive{
  color:var(--color-high-text);
}
</style>