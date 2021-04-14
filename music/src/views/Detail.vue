<template>
<div class="detail">
  <SubHeader :title="playList.name"></SubHeader>
  <DetailTop :path="playList.coverImgUrl" ref="top"></DetailTop>
  <div class="bottom">
    <ScrollView ref="scrollview">
      <DetailBottom :playList="playList.tracks"></DetailBottom>
    </ScrollView>
  </div>
</div>
</template>

<script>
import SubHeader from '../components/SubHeader'
import DetailTop from '../components/DetailTop'
import DetailBottom from '../components/DetailBottom'
import ScrollView from '../components/ScrollView'
import { getPlayList, getAlbum } from '../api/index'

export default {
  name: 'Detail',
  components: {
    SubHeader,
    DetailTop,
    DetailBottom,
    ScrollView
  },
  data: function () {
    return {
      playList: {}
    }
  },
  created () {
    if (this.$route.params.type === 'personalized') {
      getPlayList({ id: this.$route.params.id })
        .then((data) => {
          console.log(data)
          this.playList = data.playlist
        })
        .catch((error) => {
          console.log(error)
        })
    } else if (this.$route.params.type === 'albums') {
      getAlbum({ id: this.$route.params.id })
        .then((data) => {
          console.log(data)
          this.playList = {
            name: data.album.name,
            coverImgUrl: data.album.picUrl,
            tracks: data.songs
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  mounted () {
    const detaultHeiht = this.$refs.top.$el.offsetHeight
    this.$refs.scrollview.scrolling((offsetY) => {
      if (offsetY < 0) { // 上推变模糊
        // const scale = 20 * Math.abs(offsetY) / detaultHeiht
        /*
        * 注意点：高斯模糊效果是非常消耗性能的，不推荐在移动端中使用
        *        如果非要在移动端中使用，那么建议只设置一次
        * */
        // this.$refs.top.$el.style.filter = `blur(${scale}px)`

        const scale = Math.abs(offsetY) / detaultHeiht
        this.$refs.top.changeMask(scale)
      } else { // 下拉放大图片
        const scale = 1 + offsetY / detaultHeiht
        this.$refs.top.$el.style.transform = `scale(${scale})`
      }
    })
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/variable";
@import "src/assets/css/mixin";
.detail{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @include bg_sub_color();
  .bottom{
    position: absolute;
    top: 500px;
    left: 0;
    right: 0;
    bottom: 0;
  }
}
</style>
