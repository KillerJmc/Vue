// ajax input/output system
import axios from "axios";

// 抽取默认配置，返回实例。解耦合（如果以后该插件不可用，可以直接替换）

// 默认配置
let instance = axios.create({
  baseURL: 'https://getman.cn/mock',
  timeout: 5000
})

// 拦截器，一般有用于拦截和处理一些请求
instance.interceptors.response.use(config => {
  // 让用户不需要调用.data
  return config.data;
})

export default instance