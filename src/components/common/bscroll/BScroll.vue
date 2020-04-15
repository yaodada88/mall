<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    name:'scroll',
    data(){
        return {
            scroll:null,
        }
    },
    props:{
        probe:{
            type:Number,
            default:0
        },
        pullUp:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        this.scroll=new BScroll(this.$refs.wrapper,{
            click:true,
            probeType:this.probe,
            pullUpLoad:this.pullUp
        })
        this.scroll.scrollTo(0,0)
        this.scroll.on("scroll",(position)=>{
            this.$emit("backPosition",position)
        });
        this.scroll.on("pullingUp",()=>{
            this.$emit("pullUp")
        })
    },
    methods:{
        scrollTo(x,y,time=300){
            this.scroll.scrollTo(x,y,time);
        },
        finishPullUp(){
            this.scroll.finishPullUp();
        },
        refresh (){
            this.scroll.refresh();
        }
    }
}
</script>