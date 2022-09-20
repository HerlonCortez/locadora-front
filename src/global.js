import Vue from "vue"
export const baseApiUrl = 'http://localhost:8080'
export const token = 'e9603104-36ff-4a44-bb79-7545eb3530c8'

export function showError(e){
  if(e && e.response && e.response.data){
    Vue.toasted.global.defaultError({msg: e.response.data})
  }else if(typeof e === 'string'){
    Vue.toasted.global.defaultError({msg: e})
  }else{
    Vue.toasted.global.defaultError()
  }
}