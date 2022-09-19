<template>
  <div class="home">
    <PageTitle  icon="fa fa-home" main="Dashboard" sub="Locadora"/>
    <div class="stats">
      <Stat title="Editoras" :value="editoras" icon="fa fa-folder" color="#d54d50"/>
      <Stat title="Livros" :value="livros" icon="fa fa-file" color="#3bc480"/>
      <Stat title="Clientes" :value="clientes" icon="fa fa-user" color="#3282cd"/>
    </div>
  </div>
</template>

<script>

import PageTitle from '../template/PageTitle.vue'
import Stat from './Stat.vue'
import api from '@/Api'

export default {
  name: 'Home',
  components: {PageTitle, Stat},
  data: function(){
    return {
      clientes: Number,
      livros:Number,
      editoras: Number
    }
  },
  methods: {
    getCountClientes(){
      api.get(`/clientes/count`).then(
        res => {
          this.clientes = res.data
          })
    },
    getCountLivos(){
      api.get(`/livros/count`).then(
        res => {
          this.livros = res.data
          })
    },
    getCountEditoras(){
      api.get(`/editoras/count`).then(
        res => {
          this.editoras = res.data
          })
    }
  },
  mounted(){
    this.getCountClientes()
    this.getCountLivos()
    this.getCountEditoras()
  }
}
</script>

<style>
  .stats{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>