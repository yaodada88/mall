<template>
    <div id="home">
        <nav-bar class="nav-box">
            <span slot="center">购物街</span>
        </nav-bar>
        <home-swiper :banners="banners" />
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from 'network/home'
export default {
    name:'home',
    data() {
        return {
            banners:[],
            recommends:[]
        }
    },
    created(){
        getHomeMultidata().then(res=>{
            console.log(res);
            this.banners=res.data.banner.list;
            this.recommends=res.data.recommend.list;
        })
    },
    components:{
        NavBar,
        HomeSwiper
    }
}
</script>
<style scoped>
    .nav-box{
        background: var(--color-tint);
        color:#fff;
    }
</style>