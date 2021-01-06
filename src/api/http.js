// 封装 axios
import axios from 'axios'

// 对于 axios 响应结果的处理的封装
axios.interceptors.response.use((ret) => {
  // 可以进行响应的拦截出来
  // if (ret.data) {
  //   return ret.data
  // } else {
  //   return ret
  // }
  // 简写
  return ret.data || ret
})

// 对于 axios 请求的处理的封装
// axios.interceptors.request.use((cfg) => {

// })

export default axios