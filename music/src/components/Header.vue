<template>
    <div class="header" @click="changeTheme">
      <div class="header-left"></div>
      <p class="header-title">网易云音乐</p>
      <div class="header-right"></div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  methods: {
    changeTheme: function () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/variable";
@import "../assets/css/mixin";
  .header {
    height: 100px;
    width: 100%;
    //background-color: red;
    @include bg_color();
    display: flex;
    justify-content: space-between;

    .header-left, .header-right {
      height: 84px;
      width: 84px;
      margin-top: 8px;
      //background-color: black
    };

    .header-left{
      @include bg_img('../assets/images/logo')
    }

    .header-right{
      @include bg_img('../assets/images/account')
    }

    .header-title {
      line-height: 100px;
      color: white;
      font-weight: bold;
      @include font_dpr($font_large);
    }
  }
</style>
