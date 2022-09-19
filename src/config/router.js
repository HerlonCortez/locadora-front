import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import AdminPages from '../components/admin/AdminPages'
import ClienteCadastro from  '../components/cliente/ClienteCadastro'
import ClienteLista from '../components/cliente/ClienteLista'

Vue.use(VueRouter)

const routes = [{
  name:'home',
  path:'/',
  component: Home
},{
  name:'adminPages',
  path:'/admin',
  component: AdminPages
},{
  name:'clientePages',
  path:'/cliente',
  component: ClienteCadastro
},{
  name:'clienteLista',
  path:'/clienteLista',
  component: ClienteLista
}]

export default new VueRouter({
  mode: 'history',
  routes
})