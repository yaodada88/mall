<template>
  <div class="goods" @click="handelDetial">
    <img v-lazy="goodsItem.show.img" @load="imgLoad" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goods-item",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit("itemImgLoad")
    },
    handelDetial(){
      this.$router.push('/detail/'+this.goodsItem.iid)
      
    }
  }
};
</script>
<style scoped>
.goods {
  width: 48%;
  padding: 2px;
  padding-bottom: 40px;
  position: relative;
}
.goods > img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  font-size: 12px;
  overflow: hidden;
  text-align: center;
}
.goods-info > p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>