<template>
    <tabbar-box>
      <tabbar-item path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="tabbar-icon" />
        <img src="~assets/img/tabbar/home_active.svg" slot="tabbar-icon-acitve" />
        <div slot="tabbar-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="tabbar-icon" />
        <img src="~assets/img/tabbar/category_active.svg" slot="tabbar-icon-acitve" />
        <div slot="tabbar-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img src="~assets/img/tabbar/shopcart.svg" slot="tabbar-icon" />
        <img src="~assets/img/tabbar/shopcart_active.svg" slot="tabbar-icon-acitve" />
        <div slot="tabbar-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="tabbar-icon" />
        <img src="~assets/img/tabbar/profile_active.svg" slot="tabbar-icon-acitve" />
        <div slot="tabbar-text">我的</div>
      </tabbar-item>
    </tabbar-box>
</template>
<script>
import TabbarBox from "components/common/tabbar/index";
import TabbarItem from "components/common/tabbar/tabbarItem";
export default {
  name: "mainTabbar",
  components: {
    TabbarBox,
    TabbarItem
  }
};
</script>