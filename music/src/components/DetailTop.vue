<template>
<div class="detail-top">
  <img :src="path" alt="">
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
  }
}
</script>

<style scoped lang="scss">
.detail-top{
  height: 500px;
  width: 100%;
  overflow: hidden;
  img{
    width: 100%;
  }
}
</style>
