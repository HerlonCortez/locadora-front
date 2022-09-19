import Vue from "vue"
export const baseApiUrl = 'http://localhost:8080'
export const token = '34c3cabe-c4d2-4e13-9cee-a0adaa505654'

export function showError(e){
  if(e && e.response && e.response.data){
    Vue.toasted.global.defaultError({msg: e.response.data})
  }else if(typeof e === 'string'){
    Vue.toasted.global.defaultError({msg: e})
  }else{
    Vue.toasted.global.defaultError()
  }
}