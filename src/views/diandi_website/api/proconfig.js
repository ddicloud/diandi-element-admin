/**
 * @Author: Wang chunsheng  email:2192138785@qq.com
 * @Date:   2022-06-07 11:57:19
 * @Last Modified by:   Wang chunsheng  email:2192138785@qq.com
 * @Last Modified time: 2022-06-07 14:13:40
 */
import request from '@/utils/request'

export function proAppconfigView(id) {
  return request({
    url: `/diandi_website/pro-config/view/${id}`,
    method: 'get'
  })
}

export function createconfigProApp(data) {
  return request({
    url: '/diandi_website/pro-config/create',
    method: 'post',
    data
  })
}
