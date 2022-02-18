/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2021-10-30 10:40:37
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-01-20 00:03:14
 */
import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
import store from '@/store'
import {
  getToken
} from '@/utils/auth'
import qs from 'qs'
// create an axios instance
import { siteUrl } from '@/config/config'
const apiUrl = siteUrl + '/admin/'

const service = axios.create({
  baseURL: apiUrl, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 50000, // request timeout
  transformRequest: [function(data) {
    // 对 data 进行任意转换处理
    return qs.stringify(data)
  }]
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (store.getters.accessToken) {
      config.headers['access-token'] = getToken()
      config.headers['bloc-id'] = store.getters.blocId
      config.headers['store-id'] = store.getters.storeId
    }
    config.params = {
      // 'access-token': getToken(),
      ...config.params
    }
    return config
  },
  error => {
    // do something with request error
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
	 * If you want to get http information such as headers or status
	 * Please return  response => response
	 */

  /**
	 * Determine the request status by custom code
	 * Here is just an example
	 * You can also judge the status by HTTP Status Code
	 */
  response => {
    const res = response.data
    const resCode = Number(res.code)
    // if the custom code is not 20000, it is judged as an error.
    if (resCode !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (resCode === 402) {
        // token过期重新登录
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      }

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (resCode === 50008 || resCode === 50012 || resCode === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout', {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
