<template>
  <div class="recommend">
    <div class="recommend-wraper">
      <ScrollView>
        <div>
          <Banner :banners="banners"></Banner>
          <Personalized :personalized="personalized" :title="'推荐歌单'" @select="fatherSelectItem" :type="'personalized'"></Personalized>
          <Personalized :personalized="albums" :title="'最新专辑'" @select="fatherSelectItem" :type="'albums'"></Personalized>
          <SongList :songs="songs"></SongList>
        </div>
      </ScrollView>
    </div>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNewSong } from '../api/index'

import Banner from '../components/Banner'
import Personalized from '../components/Personalized'
import SongList from '../components/SongList'
import ScrollView from '../components/ScrollView'
export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized,
    SongList,
    ScrollView
  },
  data: function () {
    return {
      banners: [],
      personalized: [],
      albums: [],
      songs: []
    }
  },
  created () {
    getBanner()
      .then((data) => {
        this.banners = data.banners
      })
      .catch(function (error) {
        console.log(error)
      })
    getPersonalized()
      .then((data) => {
        this.personalized = data.result
      })
      .catch(function (error) {
        console.log(error)
      })

    getNewAlbum()
      .then((data) => {
        this.albums = data.albums.splice(0, 6)
      })
      .catch(function (error) {
        console.log(error)
      })

    getNewSong()
      .then((data) => {
        this.songs = data.result
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  methods: {
    fatherSelectItem (id, type) {
      this.$router.push({
        // path: '/recommend/detail/${id}'
        path: `/recommend/detail/${id}/${type}`
      })
    }
  }
}
</script>

<style scoped>
  .recommend{
    position: fixed;
    top: 184px;
    left: 0;
    right: 0;
    bottom: 0;
    /*overflow: hidden;*/
  }
  .recommend-wraper{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .v-enter{
    transform: translateX(100%);
  }
  .v-enter-active{
    transition: all 0.3s;
  }
  .v-enter-to{
    transform: translateX(0%);
  }

  .v-leave{
    transform: translateX(0%);
  }
  .v-leave-active{
    transition: all 0.3s;
  }
  .v-leave-to{
    transform: translateX(100%);
  }
</style>
