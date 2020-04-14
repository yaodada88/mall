<template>
    <div class="goodsBox">
        <goods-item v-for="(item,index) in goods" :key="index" :goodsItem='item' />
    </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
    name:'goods',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsItem
    }
}
</script>
<style scoped>
    .goodsBox{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>