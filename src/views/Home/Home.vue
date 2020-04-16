<template>
  <div id="home">
    <nav-bar class="nav-box">
      <span slot="center">购物街</span>
    </nav-bar>
    <tab-control
      class="tab-control"
      :tabList="['流行','新款','精选']"
      @tabClick="handleTabClick"
      ref="tabControl1"
      v-show="tabOffsetFixed"
    />
    <BScroll
      class="content"
      ref="scroll"
      :probe="3"
      @backPosition="handleBackPosition"
      :pullUp="true"
      @pullUp="handleLoadMore"
    >
      <home-swiper :banners="banners" @swipperImgLoad="swiperImgLoad" />
      <home-recommend :recommends="recommends" />
      <home-feature-view />
      <tab-control :tabList="['流行','新款','精选']" @tabClick="handleTabClick" ref="tabControl2" />
      <goods class="goods" :goods="goods[currentIndex].list" />
    </BScroll>
    <back-top @click.native="handleBackTop" v-show="isShowBackTop" />
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/contents/tabControl/TabControl";
import Goods from "components/contents/goods/Goods";
import BScroll from "components/common/bscroll/BScroll";
import BackTop from "components/contents/backTop/BackTop";

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
      currentIndex: "pop",
      isShowBackTop: false,
      tabOffsetTop: 0,
      tabOffsetFixed: false
    };
  },
  created() {
    this.getHomeMultidatas();
    this.getHomeDatas("pop");
    this.getHomeDatas("new");
    this.getHomeDatas("sell");
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImgLoad", () => {
      refresh();
    });
  },
  methods: {
    //事件监听方法
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    debounce(func, delay) {
      //节流函数
      let timer = null;
      return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
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
      this.$refs.tabControl1.activeIndex=index;
      this.$refs.tabControl2.activeIndex=index;
    },
    handleBackTop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    handleBackPosition(position) {
      this.isShowBackTop = -position.y > 1000;
      this.tabOffsetFixed = -position.y > this.tabOffsetTop;
    },
    handleLoadMore() {
      this.getHomeDatas(this.currentIndex);
      this.$refs.scroll.finishPullUp();
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
        this.currentIndex = type;
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
    BScroll,
    BackTop
  }
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.nav-box {
  background: var(--color-tint);
  color: #fff;
  position: relative;
  z-index: 9;
}
.tab-control {
  position: relative;
  z-index: 9;
}
.goods {
  padding: 3px;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0px;
  right: 0px;
}
</style>