/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 14:46:14
 */
import request from '@/utils/request'

export function proCoreList(query) {
  return request({
    url: '/diandi_website/pro-core/index',
    method: 'get',
    params: query
  })
}

export function getProCore(id) {
  return request({
    url: `/diandi_website/pro-core/view/${id}`,
    method: 'get'
  })
}

export function createProCore(data) {
  return request({
    url: '/diandi_website/pro-core/create',
    method: 'post',
    data
  })
}

export function updateProCore(data) {
  return request({
    url: `/diandi_website/pro-core/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProCore(id) {
  return request({
    url: `/diandi_website/pro-core/delete/${id}`,
    method: 'DELETE'
  })
}

