/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-27 14:28:40
 */
import request from '@/utils/request'

export function solutionList(query) {
  return request({
    url: '/diandi_website/solution/index',
    method: 'get',
    params: query
  })
}

export function getsolution(id) {
  return request({
    url: `/diandi_website/solution/view/${id}`,
    method: 'get'
  })
}

export function createsolution(data) {
  return request({
    url: '/diandi_website/solution/create',
    method: 'post',
    data
  })
}

export function updatesolution(data) {
  return request({
    url: `/diandi_website/solution/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deletesolution(id) {
  return request({
    url: `/diandi_website/solution/delete/${id}`,
    method: 'DELETE'
  })
}

