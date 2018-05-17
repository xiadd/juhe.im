import request from '../utils/request'

const BASE_URL = 'http://www.kuaidi100.com/query'

/**
 * 获取快递
 * @param {object} queries 
 */
export function getKuaidiInfo (queries) {
  return request({
    method: 'GET',
    url: BASE_URL,
    params: queries
  })  
}