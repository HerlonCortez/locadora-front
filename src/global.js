import Vue from "vue"
export const baseApiUrl = 'http://localhost:8080'
export const token = '3b8da9d4-086f-4d7e-b216-4847a5baf357'

export function showError(e){
  if(e && e.response && e.response.data){
    Vue.toasted.global.defaultError({msg: e.response.data})
  }else if(typeof e === 'string'){
    Vue.toasted.global.defaultError({msg: e})
  }else{
    Vue.toasted.global.defaultError()
  }
}