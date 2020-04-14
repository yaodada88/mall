<template>
  <div id="home">
    <nav-bar class="nav-box">
      <span slot="center">购物街</span>
    </nav-bar>
    <BScroll class="content">
      <home-swiper :banners="banners" />
      <home-recommend :recommends="recommends" />
      <home-feature-view />
      <tab-control class="tab-control" :tabList="['流行','新款','精选']" @tabClick="handleTabClick" />
      <goods class="goods" :goods="goods[currentIndex].list" />
    </BScroll>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/contents/tabControl/TabControl";
import Goods from "components/contents/goods/Goods";
import BScroll from "components/common/bscroll/BScroll";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeatureView from "./childComps/HomeFeatureView";
import { getHomeMultidata, getHomeData } from "network/home";
export default {
  name: "home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentIndex: "pop"
    };
  },
  created() {
    this.getHomeMultidatas();
    this.getHomeDatas("pop");
    this.getHomeDatas("new");
    this.getHomeDatas("sell");
  },
  methods: {
    //事件监听方法
    handleTabClick(index) {
      switch (index) {
        case 0: {
          this.currentIndex = "pop";
          break;
        }
        case 1: {
          this.currentIndex = "new";
          break;
        }
        case 2: {
          this.currentIndex = "sell";
          break;
        }
      }
    },
    //网络请求方法
    getHomeMultidatas() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeDatas(type) {
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then(res => {
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.list);
      });
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    Goods,
    BScroll
  }
};
</script>
<style scoped>
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}
.nav-box {
  background: var(--color-tint);
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.goods {
  padding: 3px;
}
.content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left: 0px;
    right: 0px;;
}
</style>