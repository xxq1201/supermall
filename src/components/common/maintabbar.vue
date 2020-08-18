<template>
  <div>
      <tabbar>
      <tabbaritem path='/home'>
        <template v-slot:item-icon> 
          <img src="../../assets/img/home.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src='../../assets/img/home_active.svg'>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tabbaritem>
      <tabbaritem path='/category'>
        <template v-slot:item-icon> 
          <img src="../../assets/img/category.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src='../../assets/img/category_active.svg'>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tabbaritem>
      <tabbaritem path='/shopcart'>
        <template v-slot:item-icon> 
          <img src="../../assets/img/shopcart.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src='../../assets/img/shopcart_active.svg'>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tabbaritem>
      <tabbaritem path='/profile'>
        <template v-slot:item-icon> 
          <img src="../../assets/img/profile.svg">
        </template>
        <template v-slot:item-icon-active>
          <img src='../../assets/img/profile_active.svg'>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tabbaritem>
    </tabbar>
  </div>
</template>

<script>
    import tabbaritem from './tabaritem.vue'
  import Tabbar from './tabbar.vue'
export default {
    name: 'maintabbar',
    components: {
        tabbaritem,
        Tabbar
    }
}
</script>

<style>

</style>