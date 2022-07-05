/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 16:40:34
 */
import request from '@/utils/request'

export function proBodyList(query) {
  return request({
    url: '/diandi_website/pro-h5-body/index',
    method: 'get',
    params: query
  })
}

export function getProBody(id) {
  return request({
    url: `/diandi_website/pro-h5-body/view/${id}`,
    method: 'get'
  })
}

export function createProBody(data) {
  return request({
    url: '/diandi_website/pro-h5-body/create',
    method: 'post',
    data
  })
}

export function updateProBody(data) {
  return request({
    url: `/diandi_website/pro-h5-body/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProBody(id) {
  return request({
    url: `/diandi_website/pro-h5-body/delete/${id}`,
    method: 'DELETE'
  })
}

