/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-27 09:37:55
 */
import request from '@/utils/request'

export function sysfuncateList(query) {
  return request({
    url: '/diandi_website/sysfuncate/index',
    method: 'get',
    params: query
  })
}

export function getsysfuncate(id) {
  return request({
    url: `/diandi_website/sysfuncate/view/${id}`,
    method: 'get'
  })
}

export function createsysfuncate(data) {
  return request({
    url: '/diandi_website/sysfuncate/create',
    method: 'post',
    data
  })
}

export function updatesysfuncate(data) {
  return request({
    url: `/diandi_website/sysfuncate/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deletesysfuncate(id) {
  return request({
    url: `/diandi_website/sysfuncate/delete/${id}`,
    method: 'DELETE'
  })
}

