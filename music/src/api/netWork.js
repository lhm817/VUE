import axios from 'axios'

// 进行一些全局设置
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.timeout = 3000

// 封装自己的get 和 post 方法
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, { params: data }).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, {
        params: data
      }).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject(error)
      })
    })
  }
}
