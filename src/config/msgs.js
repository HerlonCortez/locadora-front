import Vue from 'vue';
import Toasted from 'vue-toasted'

Vue.use(Toasted,{
  iconPack: 'fontawesome',
  duration: 6000
})

Vue.toasted.register(
  'defaultSuccess',
  payload => !payload.msg ? 'Operação Realizada com Sucesso' : payload.msg,
  {type:'success', icon:'check'}
)

Vue.toasted.register(
  'defaultError',
  payload => !payload.msg ? 'Ops, erro inesperado..' : payload.msg,
  {type:'error', icon:'times'}
)