import Vue from "vue"
export const baseApiUrl = 'http://localhost:8080'
export const token = 'cad7166c-5af0-4dee-82f0-b08e30a26234'

export function showError(e){
  if(e && e.response && e.response.data){
    Vue.toasted.global.defaultError({msg: e.response.data})
  }else if(typeof e === 'string'){
    Vue.toasted.global.defaultError({msg: e})
  }else{
    Vue.toasted.global.defaultError()
  }
}