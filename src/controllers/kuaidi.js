import { getKuaidiInfo } from '../services/kuaidi'

const kuaidiInfoController = async (ctx) => {
  try {
    const query = ctx.query
    const response = await getKuaidiInfo(query)
    ctx.body = response.data
  } catch (e) {
    ctx.body = e.toString()
  }
}

export default {
  kuaidiInfoController
}