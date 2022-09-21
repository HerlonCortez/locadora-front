import Vue from "vue"
export const baseApiUrl = 'http://localhost:8080'
export const token = 'c6008b46-de29-4054-b2d6-ece4744754a7'

export function showError(e){
  if(e && e.response && e.response.data){
    Vue.toasted.global.defaultError({msg: e.response.data})
  }else if(typeof e === 'string'){
    Vue.toasted.global.defaultError({msg: e})
  }else{
    Vue.toasted.global.defaultError()
  }
}