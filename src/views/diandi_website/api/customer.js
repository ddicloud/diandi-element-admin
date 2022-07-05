/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 15:59:20
 */
import request from '@/utils/request'

export function proCustomerList(query) {
  return request({
    url: '/diandi_website/pro-customer/index',
    method: 'get',
    params: query
  })
}

export function getProCustomer(id) {
  return request({
    url: `/diandi_website/pro-customer/view/${id}`,
    method: 'get'
  })
}

export function createProCustomer(data) {
  return request({
    url: '/diandi_website/pro-customer/create',
    method: 'post',
    data
  })
}

export function updateProCustomer(data) {
  return request({
    url: `/diandi_website/pro-customer/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteProCustomer(id) {
  return request({
    url: `/diandi_website/pro-customer/delete/${id}`,
    method: 'DELETE'
  })
}

