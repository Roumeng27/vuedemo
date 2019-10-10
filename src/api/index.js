import {
    Loading,
    Notification,
    Message
} from 'element-ui'
import baseUrl from './baseUrl.js'
import router from '../router'
import axios from 'axios'
// 加载层控制
var loadingInstance;
function startLaoding() {
    loadingInstance = Loading.service({
        lock: true,
        text: '拼命加载中，请稍候',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLading() {
    try {
        loadingInstance.close()
    } catch (err) { }
}
axios.defaults.baseURL = baseUrl; // 配置axios请求的地址
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
axios.defaults.timeout = 5000;
axios.defaults.crossDomain = true;
axios.defaults.withCredentials = true;  //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization

//配置发送请求前的拦截器 可以设置token信息 
axios.interceptors.request.use(config => {
    //loading开始
    startLaoding();
    return config;
}, error => {
    //出错，也要loading结束
    endLading();
    Message.error('网络错误，请稍后重试');
    return Promise.reject(error);
});

// 配置响应拦截器 
axios.interceptors.response.use(res => {
    //loading结束
    endLading();
    //这里面写所需要的代码
    if(res.data.ret == 0){
        Message.error('服务器错误，请稍后重试');
    }else if(res.data.ret == -1){
        Message.error('参数错误');
    }else if(res.data.ret == 401){
        Message.error('sorry，你的权限不够');
    }
    return Promise.resolve(res);
}, error => {
    endLading();
    Message.error('服务器错误，请稍后重试');
    return Promise.reject(error);
})
export default axios;
