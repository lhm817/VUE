<template>
  <div class="header" @click="changeTheme">
    <div class="header-left" @click.stop="back"></div>
    <p class="header-title">{{title}}</p>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
  data: function () {
    return {
      themes: ['theme', 'theme1', 'theme2'],
      index: 0
    }
  },
  props: {
    title: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    changeTheme: function () {
      this.index++
      if (this.index >= this.themes.length) {
        this.index = 0
      }
      document.documentElement.setAttribute('data-theme', this.themes[this.index])
    },
    back: function () {
      window.history.back()
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
  //position: relative;
  //z-index: 9999;

  .header-left, .header-right {
    height: 84px;
    width: 84px;
    margin-top: 8px;
    //background-color: black
  };

  .header-left{
    @include bg_img('../assets/images/back')
  }

  .header-right{
    @include bg_img('../assets/images/more')
  }

  .header-title {
    line-height: 100px;
    color: white;
    font-weight: bold;
    @include font_dpr($font_large);
  }
}
</style>
