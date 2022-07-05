/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 11:21:44
 */
import request from '@/utils/request'

export function proAppList(query) {
  return request({
    url: '/diandi_website/pro-app/index',
    method: 'get',
    params: query
  })
}

export function getProApp(id) {
  return request({
    url: `/diandi_website/pro-app/view/${id}`,
    method: 'get'
  })
}

export function createProApp(data) {
  return request({
    url: '/diandi_website/pro-app/create',
    method: 'post',
    data
  })
}

export function updateProApp(data) {
  return request({
    url: `/diandi_website/pro-app/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProApp(id) {
  return request({
    url: `/diandi_website/pro-app/delete/${id}`,
    method: 'DELETE'
  })
}

