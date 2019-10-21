import axios from '../http'
//写具体的接口
export const queryCategoryByPid = (pid) => axios.get('/item/category/list'+"?Pid="+pid)
