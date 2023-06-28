import axios from 'axios'
//创建axios实例
const service=axios.create({
    baseURL:'http://localhost:8080',
    timeout:"5000"
})

//创建请求拦截器
service.interceptors.request.use(config=>{
    let token=localStorage.getItem('token')
    config.headers['Authorization']=token
    return config
},error=>{
    return Promise.reject(error)
})

//创建响应拦截器
service.interceptors.response.use(response=>{
    // 后台正常响应的状态，如果是200， 说明后台处理没有问题
    /*  if (response.status == 200) {
         return response.data;
     } */
    // return response.data 可以在这里统一的获取后台响应的数据进行返回，而这里面就没有请求头那些
    return response
},error => {
    return Promise.reject(error)
})



export default service
