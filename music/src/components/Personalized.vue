<template>
  <div class="personalized">
    <div class="personalized-top">
      <h3>{{title}}</h3>
    </div>
    <div class="personalized-list">
      <div class="item" v-for="value in personalized" :key="value.id" @click="selectItem(value.id)">
<!--        <img :src="value.picUrl" alt="">-->
        <img v-lazy="value.picUrl" alt="">
        <p>{{value.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Personalized',
  props: {
    personalized: {
      type: Array,
      default: () => [],
      required: true
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: '',
      required: true
    }
  },
  methods: {
    selectItem (id, type) {
      console.log(id)
      this.$emit('select', id, this.type)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/mixin";
@import "../assets/css/variable";
  .personalized{
    @include bg_sub_color;
    .personalized-top{
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

    .personalized-list{
      width: 100%;
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      padding: 20px 0;
      .item{
        width: 200px;
        padding-bottom: 20px;
        img{
          width: 100%;
          height: 200px;
          border-radius: 20px;
        }
        p{
          @include clamp(2);
          @include font_size($font_samll);
          @include font_color();
          text-align: center;
        }
      }
    }
  }
</style>
