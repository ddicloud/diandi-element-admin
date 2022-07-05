/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 18:02:34
 */
import request from '@/utils/request'

export function proSlideList(query) {
  return request({
    url: '/diandi_website/pro-slide/index',
    method: 'get',
    params: query
  })
}

export function getProSlide(id) {
  return request({
    url: `/diandi_website/pro-slide/view/${id}`,
    method: 'get'
  })
}

export function createProSlide(data) {
  return request({
    url: '/diandi_website/pro-slide/create',
    method: 'post',
    data
  })
}

export function updateProSlide(data) {
  return request({
    url: `/diandi_website/pro-slide/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProSlide(id) {
  return request({
    url: `/diandi_website/pro-slide/delete/${id}`,
    method: 'DELETE'
  })
}

