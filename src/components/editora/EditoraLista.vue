<template>
    <div class="editora-lista">
       <PageTitle  icon="fa fa-cogs" main="Área da Editora" sub="Listagem"/>
         <b-card>
            <b-table hover striped :items="editoras" :fields="fields">
              <template slot="actions" slot-scope="data">
                <b-button variant="warning" to="/editora" @click="getEditora(data.item.id)" class="mr-2">
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
    name: 'editoraLista',
    components:{PageTitle},
    data: function(){
      return{
            editoras:[],
            editora:{},
            fields:[
              {key: 'id', label: 'Código', sortable:true},
              {key: 'descricao', label: 'Descrição', sortable:true},
              {key: 'uf', label: 'UF'},
              {key: 'cidade', label: 'Cidade'},
              {key: 'actions', label:'Ações'}
            ],
      }
    },
    methods:{
      loadEditoras(){
        api.get(`/editoras`).then(
          res => {
            this.editoras = res.data
            })
      },
       excluir(id, name){
        this.$swal({
            title:'Deseja excluir a editora?',
            text: name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            showCloseButton: true,
            showLoaderOnConfirm: true
        }).then((res) =>{
          if(res.isConfirmed){
              api.del(`/editoras/${id}`).then(
              () => {
                this.$swal('','Excluído com sucesso','success')
              })
          }
        })
      },
      getEditora(id){
        api.get(`/editoras/${id}`).then(
          res => {
            this.editora = res.data
            barramento.$emit('editora', this.editora)
          })
      }
    },
    mounted(){
      this.loadEditoras()
    }
  }
  </script>
  
  <style>
  
  </style>