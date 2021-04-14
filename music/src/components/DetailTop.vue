<template>
<div class="detail-top">
  <img :src="path" alt="">
  <div class="mask" ref="mask"></div>
</div>
</template>

<script>
export default {
  name: 'DetailTop',
  props: {
    path: {
      type: String,
      default: '',
      require: true
    }
  },
  methods: {
    changeMask (opacity) {
      this.$refs.mask.style.opacity = opacity
    }
  }
}
</script>

<style scoped lang="scss">
.detail-top{
  height: 500px;
  width: 100%;
  overflow: hidden;
  position: relative;
  img{
    width: 100%;
  }
  .mask{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    opacity:0;
  }
}
</style>
