<template>
  <div class="recommend">
    <Banner :banners="banners"></Banner>
    <Personalized :personalized="personalized" :title="'推荐歌单'"></Personalized>
    <Personalized :personalized="albums" :title="'最新专辑'"></Personalized>
  </div>
</template>

<script>
import { getBanner, getPersonalized, getNewAlbum, getNewSong } from '../api/index'

import Banner from '../components/Banner'
import Personalized from '../components/Personalized'
export default {
  name: 'Recommend',
  components: {
    Banner,
    Personalized
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
  }
}
</script>

<style scoped>

</style>
