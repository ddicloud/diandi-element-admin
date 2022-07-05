/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-28 15:32:14
 */
import request from '@/utils/request'

export function sysWorthList(query) {
  return request({
    url: '/diandi_website/bac-exhibit/index',
    method: 'get',
    params: query
  })
}

export function getsysWorth(id) {
  return request({
    url: `/diandi_website/bac-exhibit/view/${id}`,
    method: 'get'
  })
}

export function createsysWorth(data) {
  return request({
    url: '/diandi_website/bac-exhibit/create',
    method: 'post',
    data
  })
}

export function updatesysWorth(data) {
  return request({
    url: `/diandi_website/bac-exhibit/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deletesysWorth(id) {
  return request({
    url: `/diandi_website/bac-exhibit/delete/${id}`,
    method: 'DELETE'
  })
}

