import axios from 'axios';
import QS from 'qs';
import { Loading, Message } from 'element-ui';
import router from '../router/router';

axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

// 请求拦截
axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.error(error);
    });

// 响应拦截
axios.interceptors.response.use(
    response => {
        if (response.data.code === 200) {
            Message({
                message: response.data.msg,
                type: 'success'
            })
        } else {
            Message({
                message: response.data.msg,
                type: 'error'
            })
        }
        return response
    },

    error => {
        Message({
            message: '服务器错误',
            type: 'error'
        })
        return Promise.reject(error);
    }
);


export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res);
        }).catch(err => {
            reject(err)
        })
    });
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            })
    });
}


