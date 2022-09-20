import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import AdminPages from '../components/admin/AdminPages'
import ClienteCadastro from  '../components/cliente/ClienteCadastro'
import ClienteLista from '../components/cliente/ClienteLista'
import EditoraCadastro from '../components/editora/EditoraCadastro'
import EditoraLista from '../components/editora/EditoraLista'
import LivroCadastro from  '../components/livro/LivroCadastro'
import LivroLista from '../components/livro/LivroLista'


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
},{
  name:'EditoraCadastro',
  path:'/editora',
  component: EditoraCadastro
},{
  name:'EditoraLista',
  path:'/editoraLista',
  component: EditoraLista
},{
  name:'LivroCadastro',
  path:'/livro',
  component:LivroCadastro
},{
  name:'LivroLista',
  path:'/livroLista',
  component:LivroLista
}]

export default new VueRouter({
  mode: 'history',
  routes
})