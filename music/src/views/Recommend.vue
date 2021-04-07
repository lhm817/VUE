<template>
  <div class="recommend">
    <Banner></Banner>
  </div>
</template>

<script>
import { getBanner } from '../api/index'
import Banner from '../components/Banner'
export default {
  name: 'Recommend',
  comments: {
    Banner
  },
  data: function () {
    return {
      banners: []
    }
  },
  created () {
    getBanner()
      .then((data) => {
        // console.log(data)
        this.banners = data.banners
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
