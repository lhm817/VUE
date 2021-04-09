<template>
<div class="detail">
  <SubHeader :title="playList.name"></SubHeader>
</div>
</template>

<script>
import SubHeader from '../components/SubHeader'
import { getPlayList } from '../api/index'

export default {
  name: 'Detail',
  components: {
    SubHeader
  },
  data: function () {
    return {
      playList: {}
    }
  },
  created () {
    getPlayList({ id: this.$route.params.id })
      .then((data) => {
        console.log(data)
        this.playList = data.playlist
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped lang="scss">
.detail{
  background-color: red;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
