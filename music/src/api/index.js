// 这个js 文件就是专门用于管理各种请求接口地址的
import NetWork from './netWork'

export const getBanner = () => NetWork.get('banner?type=2')
