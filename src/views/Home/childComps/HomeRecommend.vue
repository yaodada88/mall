<template>
    <div class="recommendBox">
        <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
            <a :href="item.link">
                <img :src="item.image" >
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeRecommend',
    props:{
        recommends:{
            type:Array,
            dafault(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommendBox{
        display: flex;
        font-size: 12px;
        padding: 10px 0px 20px;
        border-bottom: 10px solid #eee;
    }
    .recommend-item{
        flex: 1;
        text-align: center;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;
        margin-bottom: 8px;
    }
</style>