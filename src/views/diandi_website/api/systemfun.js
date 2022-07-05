/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-27 09:27:59
 */
import request from '@/utils/request'

export function sysFunList(query) {
  return request({
    url: '/diandi_website/sysfun/index',
    method: 'get',
    params: query
  })
}

export function getsysFun(id) {
  return request({
    url: `/diandi_website/sysfun/view/${id}`,
    method: 'get'
  })
}

export function createsysFun(data) {
  return request({
    url: '/diandi_website/sysfun/create',
    method: 'post',
    data
  })
}

export function updatesysFun(data) {
  return request({
    url: `/diandi_website/sysfun/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deletesysFun(id) {
  return request({
    url: `/diandi_website/sysfun/delete/${id}`,
    method: 'DELETE'
  })
}

