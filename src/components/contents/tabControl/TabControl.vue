<template>
    <div class="tab-control">
        <div v-for="(item,index) in tabList" :key="index" 
        class="tab-control-item" 
        :class="{active:index==activeIndex}"
        @click="handleActive(index)">
            <span>{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'tabControl',
    props:{
        tabList:{
            type:Array,
            data(){
                return []
            }
        }
    },
    data(){
        return{
            activeIndex:0
        }
    },
    methods:{
        handleActive(index){
            this.activeIndex=index;
            this.$emit("tabClick",index);
        }
    }
    
}
</script>
<style scoped>
    .tab-control{
        display: flex;
        height: 40px;
        line-height: 40px;
        background: #fff;
    }
    .tab-control-item{
        flex: 1;
        text-align: center;
    }
    .active{
        color: var(--color-high-text);
    }
    .active span{
        border-bottom: 2px solid var(--color-high-text);
        padding:5px;
    }
</style>