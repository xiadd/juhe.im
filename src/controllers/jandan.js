import { getPics, getOoxxPics, upvotePic, downvotePic } from '../services/jandan'

const getPicController = async (ctx) => {
  const page = ctx.query.page || 1
  try {
    const response = await getPics(page)
    ctx.body = response.data
  } catch (e) {
    ctx.body = e.toString()
  }
}

const getOoxxPicController = async (ctx) => {
  const page = ctx.query.page || 1
  try {
    const response = await getOoxxPics(page)
    ctx.body = response.data
  } catch (e) {
    ctx.body = e.toString()
  }
}

const upvotePicController = async (ctx) => {
  const id = ctx.params.id
  try {
    const response = await upvotePic(id)
    ctx.body =response.data
  } catch (e) {
    ctx.body = e.toString()
  }
}

const downvotePicController = async (ctx) => {
  const id = ctx.params.id
  try {
    const response = await downvotePic(id)
    ctx.body =response.data
  } catch (e) {
    ctx.body = e.toString()
  }
}

export default {
  getPicController,
  getOoxxPicController,
  upvotePicController,
  downvotePicController
}