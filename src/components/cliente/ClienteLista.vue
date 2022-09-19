<template>
  <div class="cliente-lista">
     <PageTitle  icon="fa fa-cogs" main="Área do cliente" sub="Listagem"/>
       <b-card>
          <b-table hover striped :items="clientes" :fields="fields">
            <template slot="actions" slot-scope="data">
              <b-button variant="warning" to="/cliente" @click="getCliente(data.item.id)" class="mr-2">
                  Editar
              </b-button>
              <b-button variant="danger" @click="excluir(data.item.id, data.item.nome)" class="mr-2">
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
  name: 'ClienteLista',
  components:{PageTitle},
  data: function(){
    return{
          clientes:[],
          cliente:{},
          fields:[
            {key: 'id', label: 'Código', sortable:true},
            {key: 'nome', label: 'Nome', sortable:true},
            {key: 'cpf', label: 'Cpf'},
            {key: 'celular', label: 'Celular'},
            {key: 'email', label: 'E-mail'},
            {key: 'actions', label:'Ações'}
          ],
    }
  },
  methods:{
    loadClientes(){
      api.get(`/clientes`).then(
        res => {
          this.clientes = res.data
          })
    },
     excluir(id, name){
      this.$swal({
          title:'Deseja excluir o cliente?',
          text: name,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não',
          showCloseButton: true,
          showLoaderOnConfirm: true
      }).then((res) =>{
        if(res.isConfirmed){
            api.del(`/clientes/${id}`).then(
            () => {
              this.$swal('','Excluído com sucesso','success')
            })
        }
      })
    },
    getCliente(id){
      api.get(`/clientes/${id}`).then(
        res => {
          this.cliente = res.data
          barramento.$emit('cliente', this.cliente)
        })
    }
  },
  mounted(){
    this.loadClientes()
  }
}
</script>

<style>

</style>