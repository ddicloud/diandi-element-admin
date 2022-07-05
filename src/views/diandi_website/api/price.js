/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-04-19 10:08:15
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-28 10:51:50
 */
import request from '@/utils/request'

export function productPriceList(query) {
  return request({
    url: '/diandi_website/product-price/index',
    method: 'get',
    params: query
  })
}

export function getproductPrice(id) {
  return request({
    url: `/diandi_website/product-price/view/${id}`,
    method: 'get'
  })
}

export function createproductPrice(data) {
  return request({
    url: '/diandi_website/product-price/create',
    method: 'post',
    data
  })
}

export function updateproductPrice(data) {
  return request({
    url: `/diandi_website/product-price/update/${data.id}`,
    method: 'PUT',
    data
  })
}

export function deleteproductPrice(id) {
  return request({
    url: `/diandi_website/product-price/delete/${id}`,
    method: 'DELETE'
  })
}

