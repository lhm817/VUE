<template>
<div class="song">
  <div class="song-top">
    <h3>最新音乐</h3>
  </div>
  <ul class="song-list">
    <li></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'SongList'
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
  .song{
    width: 100%;
    @include bg_sub_color;
    .song-top{
      width: 100%;
      height: 84px;
      line-height: 84px;
      @include bg_sub_color();
      padding: 0 20px;
      border-bottom: 1px solid #ccc;
      h3{
        @include font_size($font_large);
        @include font_color();
        font-weight: bold;
      }
    }
  }
</style>
