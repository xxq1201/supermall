<template>
  <div id='home'>
    <nav-bar class='nav-title'>
        <template v-slot:center>
          <p>购物街</p>
        </template>
    </nav-bar>

  </div>  
</template>

<script>
import NavBar from '../../common/navbar/NavBar.vue'
import {Swiper, SwiperItem} from '../../common/swiper/index'
export default {
    name: 'Home',
    components: {
      NavBar,
     
    }
}
</script>

<style>
  .nav-title {
    background: var(--color-tint);
    text-align: center;
    color: var(--color-background);
    font-size: var(--font-size)
  }
</style>