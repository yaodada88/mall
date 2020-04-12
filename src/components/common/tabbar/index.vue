<template>
    <div class="tabbarBox">
        <slot></slot>
      </div>
</template>
<script>
import TabbarItem from './tabbarItem'
export default {
    name:'tabbar',
    components:{
      TabbarItem
    }
}
</script>
<style scoped>

.tabbarBox{ 
  width: 100%;
  height: 49px;
  background: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0px -1px 1px rgba(100,100,100,.1);
 
}
</style>