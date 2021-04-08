// 这个js 文件就是专门用于管理各种请求接口地址的
import NetWork from './netWork'

export const getBanner = () => NetWork.get('banner?type=2')
export const getPersonalized = () => NetWork.get('personalized?limit=6') // limit 可选，默认30
export const getNewAlbum = () => NetWork.get('/album/newest')
export const getNewSong = () => NetWork.get('/personalized/newsong')
