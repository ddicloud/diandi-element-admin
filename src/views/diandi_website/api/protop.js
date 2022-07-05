/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 16:15:36
 */
import request from '@/utils/request'

export function proTopList(query) {
  return request({
    url: '/diandi_website/pro-h5-top/index',
    method: 'get',
    params: query
  })
}

export function getProTop(id) {
  return request({
    url: `/diandi_website/pro-h5-top/view/${id}`,
    method: 'get'
  })
}

export function createProTop(data) {
  return request({
    url: '/diandi_website/pro-h5-top/create',
    method: 'post',
    data
  })
}

export function updateProTop(data) {
  return request({
    url: `/diandi_website/pro-h5-top/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProTop(id) {
  return request({
    url: `/diandi_website/pro-h5-top/delete/${id}`,
    method: 'DELETE'
  })
}

