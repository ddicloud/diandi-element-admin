/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 17:00:52
 */
import request from '@/utils/request'

export function proPlugList(query) {
  return request({
    url: '/diandi_website/pro-plug/index',
    method: 'get',
    params: query
  })
}

export function getProPlug(id) {
  return request({
    url: `/diandi_website/pro-plug/view/${id}`,
    method: 'get'
  })
}

export function createProPlug(data) {
  return request({
    url: '/diandi_website/pro-plug/create',
    method: 'post',
    data
  })
}

export function updateProPlug(data) {
  return request({
    url: `/diandi_website/pro-plug/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProPlug(id) {
  return request({
    url: `/diandi_website/pro-plug/delete/${id}`,
    method: 'DELETE'
  })
}

