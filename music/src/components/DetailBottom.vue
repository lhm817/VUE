<template>
<ul class="detail-bottom">
  <li class="bottom-top">
    <div class="bottom-icon"></div>
    <div class="bottom-title">播放全部</div>
  </li>
  <li v-for="value in playList" :key="value.id">
    <h3>{{value.al.name}}</h3>
    <p>{{value.ar[0].name}}</p>
  </li>
</ul>
</template>

<script>
export default {
  name: 'DetailBottom',
  props: {
    playList: {
      type: Array,
      default: () => [],
      require: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/variable";
@import "src/assets/css/mixin";
.detail-bottom{
  width: 100%;
  li{
    width: 100%;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
    @include bg_sub_color();
    border-bottom: 1px solid #ccc;
    h3{
      @include font_size($font_medium);
      @include font_color();
    }
    p{
      @include font_size($font_samll);
      @include font_color();
      margin-top: 10px;
      opacity: 0.8;
    }
  }
  .bottom-top{
    display: flex;
    align-items: center;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    .bottom-icon{
      height: 60px;
      width: 60px;
      @include bg_img('../assets/images/small_play');
      margin-right: 20px;
    }
    .bottom-title{
      @include font_color();
      @include font_size($font_medium)
    }
  }
}

</style>
