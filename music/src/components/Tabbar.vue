<template>
  <div class="tabbar">
    <router-link tag="div" class="item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="item" to="/singer">
      <span>歌手</span>
    </router-link>
    <router-link tag="div" class="item" to="/rank">
      <span>排行</span>
    </router-link>
    <router-link tag="div" class="item" to="/search">
      <span>搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'
}
</script>

<style scoped lang="scss">
@import "src/assets/css/variable";
@import "src/assets/css/mixin";
  .tabbar{
    height: 84px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    @include bg_sub_color;
    //position: relative;
    //z-index: 9999;
    .item{
      span{
        line-height: 84px;
        @include font_size($font_medium);
        @include font_color();
      }
      &.router-link-active{
        span{
          @include font_active_color();
        }
        border-bottom: 5px solid;
        @include border_color();
      }
    }

  }
</style>
