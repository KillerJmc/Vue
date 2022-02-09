// ajax input/output system
import axios from "axios";

// 抽取默认配置，返回实例。解耦合（如果以后该插件不可用，可以直接替换）

// 默认配置
let instance = axios.create({
  baseURL: 'https://getman.cn/mock',
  // 接受跨域的Credentials（证书：如请求头，Cookie等）
  withCredentials: true,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 打印发送的url
  // 构造一个对象并转换为json字符串表示
  console.log("request " + JSON.stringify({
    url: config.url,
    data: config.data
  }, null, 4))
  return config
})

// 回复拦截器
instance.interceptors.response.use(config => {
  console.log("response " + JSON.stringify(config.data, null, 4))
  // 让用户不需要调用.data
  return config.data
}, e => {
  // 打印错误
  alert(e)
})

export default instance