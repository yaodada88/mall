<template>
    <div class="tab-bar-item" @click="handleLink()">
        <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
        <div v-else><slot name="tabbar-icon-acitve"></slot></div>
        <div :style="activeStyle"><slot name="tabbar-text"></slot></div>
        
    </div>
</template>
<script>
export default {
    name:'tabbarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // isActive:false
        }
    },
    computed: {
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive? {color:this.activeColor}:{}
        }
    },
    methods:{
        handleLink(){
            this.$router.replace(this.path)
        }
    }
}
</script>
<style  scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .tab-bar-item>div{
    font-size: 14px;
     margin-top: 2px;;
  }
</style>