/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 17:52:22
 */
import request from '@/utils/request'

export function proVersionList(query) {
  return request({
    url: '/diandi_website/pro-version/index',
    method: 'get',
    params: query
  })
}

export function getProVersion(id) {
  return request({
    url: `/diandi_website/pro-version/view/${id}`,
    method: 'get'
  })
}

export function createProVersion(data) {
  return request({
    url: '/diandi_website/pro-version/create',
    method: 'post',
    data
  })
}

export function updateProVersion(data) {
  return request({
    url: `/diandi_website/pro-version/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProVersion(id) {
  return request({
    url: `/diandi_website/pro-version/delete/${id}`,
    method: 'DELETE'
  })
}

