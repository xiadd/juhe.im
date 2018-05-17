import request from '../utils/request'

const BASE_URL = 'http://i.jandan.net/'

/**
 * 获取无聊图
 * @param {number} page 
 */
export function getPics (page = 1) {
  return request({
    method: 'GET',
    url: BASE_URL,
    params: {
      oxwlxojflwblxbsapi: 'jandan.get_pic_comments',
      page
    }
  })
}


/**
 * 获取妹子图
 * @param {number} page 
 */
export function getOoxxPics (page = 1) {
  return request({
    method: 'GET',
    url: BASE_URL,
    params: {
      oxwlxojflwblxbsapi: 'jandan.get_ooxx_comments',
      page
    }
  })
}

/**
 * 对图片点赞
 * @param {string} commentId 
 */
export function upvotePic (commentId) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/index.php`,
    params: {
      acv_ajax: 'true',
      option: 1
    },
    data: {
      ID: commentId
    }
  })
}

/**
 * 对图片点反对
 * @param {string} commentId 
 */
export function downvotePic (commentId) {
  return request({
    method: 'POST',
    url: `${BASE_URL}/index.php`,
    params: {
      acv_ajax: 'true',
      option: 0
    },
    data: {
      ID: commentId
    }
  })
}