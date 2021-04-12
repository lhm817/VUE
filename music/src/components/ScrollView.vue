<template>
<div id="wrapper" ref="wrapper">
  <slot></slot>
</div>
</template>

<script>
import IScroll from 'iscroll/build/iscroll-probe'
export default {
  name: 'ScrollView',
  mounted () {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      onmousewheel: true,
      scrollbars: false,
      probeType: 3, // 像素级的触发
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true,
      disablePointer: true,
      disableTouch: false,
      disableMouse: true
    })
    // 由于数据均由后台加载提供，故渲染完应重新计算滚动距离
    // setTimeout(() => {
    //   console.log(this.iscroll.maxScrollY)
    //   this.iscroll.refresh()
    //   console.log(this.iscroll.maxScrollY)
    // }, 3000)

    // 以上用延迟方式不可靠，无法确认什么时候数据加载完成，采用MutationObserver对数据变化进行监听
    // 1.创建一个观察者对象
    /*
    * MutationObserver构造函数在嗨哟啊监听到了指定内容发生了变化，就会执行传入的回调对象
    * mutationLists:发生变化的数组
    * observer:观察者对象
    * */
    const observer = new MutationObserver((mutationList, observer) => {
      console.log(this.iscroll.maxScrollY)
      this.iscroll.refresh()
      console.log(this.iscroll.maxScrollY)
    })
    // 2.告诉观察者，我们需要观察谁，需要观察什么内容
    const config = {
      childList: true, // 观察目标子节点的变化，添加或者删除
      subtree: true, // 默认为false,设置为true可以观察后代节点
      attributeFilter: ['height', 'offsetHeight'] // 观察特定属性
      // characterDataOldValue: true // 观察characterData变动，是否需要记录变化前的值
    }
    // 3.告诉观察者对象，我们需要观察谁，需要观察什么内容
    /*
    * 第一个参数：告诉观察者，我们需要观察谁
    * 第二个参数：告诉观察者对象我们需要观察什么内容
    * */
    observer.observe(this.$refs.wrapper, config)
  },
  methods: {
    // 提供一个监听滚动距离的方法给外界
    scrolling (fn) {
      this.iscroll.on('scroll', function () {
        fn(this.y)
      })
    }
  }
}
</script>

<style scoped lang="scss">
#wrapper{
  height: 100%;
  width: 100%;
}

</style>
