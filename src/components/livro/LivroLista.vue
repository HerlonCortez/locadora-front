<template>
    <div class="livro-lista">
       <PageTitle  icon="fa fa-cogs" main="Área do Livro" sub="Listagem"/>
         <b-card>
            <b-table hover striped :items="livros" :fields="fields">
              <template slot="actions" slot-scope="data">
                <b-button variant="warning" to="/livro" @click="getlivro(data.item.id)" class="mr-2">
                    Editar
                </b-button>
                <b-button variant="danger" @click="excluir(data.item.id, data.item.descricao)" class="mr-2">
                    Excluir
                </b-button>
              </template>
            </b-table>
         </b-card>
    </div>
  </template>
  
  <script>
  import PageTitle from '../template/PageTitle.vue'
  import api from '@/Api'
  import barramento from '../../config/barramento'
  
  export default {
    name: 'livroLista',
    components:{PageTitle},
    data: function(){
      return{
            livros:[],
            livro:{},
            fields:[
              {key: 'id', label: 'Código', sortable:true},
              {key: 'descricao', label: 'Descrição', sortable:true},
              {key: 'editora.descricao', label: 'Editora'},
              {key: 'autor', label: 'Autor'},
              {key: 'lancamento', label: 'Lançamento'},
              {key: 'actions', label:'Ações'}
            ],
      }
    },
    methods:{
      loadlivros(){
        api.get(`/livros`).then(
          res => {
            this.livros = res.data
            })
      },
       excluir(id, name){
        this.$swal({
            title:'Deseja excluir a livro?',
            text: name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            showCloseButton: true,
            showLoaderOnConfirm: true
        }).then((res) =>{
          if(res.isConfirmed){
              api.del(`/livros/${id}`).then(
              () => {
                this.$swal('','Excluído com sucesso','success')
              })
          }
        })
      },
      getlivro(id){
        api.get(`/livros/${id}`).then(
          res => {
            this.livro = res.data
            barramento.$emit('livro', this.livro)
          })
      }
    },
    mounted(){
      this.loadlivros()
    }
  }
  </script>
  
  <style>
  
  </style>