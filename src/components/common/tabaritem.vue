<template>
   <div class='tabbar-item' @click='itemClick'>
        <div v-if="!isActive">
            <slot name='item-icon'></slot>
        </div>
        <div v-else>
            <slot name='item-icon-active'></slot>
        </div>
        <div :class="{iscolor: isActive}">
            <slot name='item-text'></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabaritem',
    props: 
        ['path']//或者{path: String}
    ,
    data() {
        return {
            //isActive: true
        }
    },
    computed :{
        isActive () {
            return this.$route.path.indexOf(this.path) !== -1
        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.path).catch(err => err);//加上.catch(err => err)是解决路由重复点击出现的报错
        }
    }
}
</script>

<style>
    #tabbar .tabbar-item {
        flex:1;
        text-align: center;
        font-size: 14px;    
    }
    #tabbar img{
        width: 24px;
        height:24px;
        margin-top: 3px;
        vertical-align: middle;
    }
    #tabbar .tabbar-item .iscolor{
        color: pink
    }
</style>