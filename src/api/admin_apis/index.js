import {fetchGet,fetchPost} from "../axios";

// 获取全部待审任务 GET
export function fetch_uncheck () {
  return fetchGet('/admin/task/unchecking')
}

// 任务审核通过 GET
export function pass_task (params) {
  return fetchGet('/admin/task/launching', params)
}

// 退回任务 POST
export function reject_task (params) {
  return fetchGet('/admin/task/rejecting', params)
}

// 显示积分排名 GET
export function fetch_points () {
  return fetchGet('/admin/visual/points')
}

// 单日发布任务数查询 GET
export function fetch_task1Day (params) {
  return fetchGet('/admin/visual/taskDayNum', params)
}

// 任务状态显示 GET
export function fetch_taskState () {
  return fetchGet('/admin/visual/task')
}

// 展示所有任务 GET
export function fetch_allTask () {
  return fetchGet('/admin/task/display/allTask')
}

// 叫停任务 GET
export function stop_task (params) {
  return fetchGet('/admin/task/stopping', params)
}

//获取男女数目
export function fetch_genderNum () {
  return fetchGet('/admin/userinfo/gender')
}

//获取省份数目
export function fetch_provinceNum () {
  return fetchGet('/admin/userinfo/getprovince')
}

export function fetch_provinceTask () {
  return fetchGet('/admin/gettaskprovince')
}
