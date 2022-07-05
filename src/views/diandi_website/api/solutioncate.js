/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-27 14:11:07
 */
import request from '@/utils/request'

export function solutioncateList(query) {
  return request({
    url: '/diandi_website/solutioncate/index',
    method: 'get',
    params: query
  })
}

export function getsolutioncate(id) {
  return request({
    url: `/diandi_website/solutioncate/view/${id}`,
    method: 'get'
  })
}

export function createsolutioncate(data) {
  return request({
    url: '/diandi_website/solutioncate/create',
    method: 'post',
    data
  })
}

export function updatesolutioncate(data) {
  return request({
    url: `/diandi_website/solutioncate/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deletesolutioncate(id) {
  return request({
    url: `/diandi_website/solutioncate/delete/${id}`,
    method: 'DELETE'
  })
}

