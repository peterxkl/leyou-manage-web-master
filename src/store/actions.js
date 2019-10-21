import { queryCategoryByPid } from '../api/category'

//用来callapi的，调用/api/目录下的具体方法
const actions = {
  async queryCategoryByPid ({ commit }) {
    commit('test', await queryCategoryByPid())
  },
}

export default actions
