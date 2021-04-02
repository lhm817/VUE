module.exports = {
  plugins:{
    autoprefixer:{},
    'postcss-pxtorem':{
      rootValue:100,  //根元素字体大小
      propList:['*']    //注意点，因为若有不需要按视口变化进行缩放的属性，如：字体大小，其余需要缩放的则需要逐一列出，这样很麻烦，解决办法：在写字体大小时将px 的p 转换为大写，即：Px 则在视口缩放时也不会进行rem的转换
      // propList:['height','width'] //根据视口缩放的属性设置，只有高度和宽度按视口缩放
    }
  }
}
