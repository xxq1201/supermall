<template>
  <div class='nav-bar'>
      <div class='left'><slot name='left'></slot></div>
      <div class='center'><slot name='center'></slot></div>
      <div class='right' ><slot name='right'></slot></div>
  </div>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .nav-bar {
        height: 48px;
        display: flex;
        line-height: 48px
    }
    .left, .right{
        width: 50px;
    }
    
    .center {
        flex:1;
    }
</style>