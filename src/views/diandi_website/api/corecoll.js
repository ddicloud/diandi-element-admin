/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 15:01:02
 */
import request from '@/utils/request'

export function proSellingList(query) {
  return request({
    url: '/diandi_website/pro-selling/index',
    method: 'get',
    params: query
  })
}

export function getProSelling(id) {
  return request({
    url: `/diandi_website/pro-selling/view/${id}`,
    method: 'get'
  })
}

export function createProSelling(data) {
  return request({
    url: '/diandi_website/pro-selling/create',
    method: 'post',
    data
  })
}

export function updateProSelling(data) {
  return request({
    url: `/diandi_website/pro-selling/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProSelling(id) {
  return request({
    url: `/diandi_website/pro-selling/delete/${id}`,
    method: 'DELETE'
  })
}

