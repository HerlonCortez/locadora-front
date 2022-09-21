<template>
  <div class="cliente-cadastro">
     <PageTitle  icon="fa fa-cogs" main="Área do cliente" sub="Cadastro"/>
    <b-card>
    <b-form v-on:submit.prevent>
      <input id="cliente.id" type="hidden" v-model="cliente.id"/>
      <b-row>
        <b-col  md="4" sm="12">
            <b-form-group label="Nome" label-for="cliente-name">
                <b-form-input id="cliente-name" type="text" 
                v-model="cliente.nome" required placeholder="Informe o nome do cliente">
                </b-form-input>
                <p class="validation">{{valid.nome}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="4" sm="12">
            <b-form-group label="Cpf" label-for="cliente-cpf">
                <b-form-input id="cliente-cpf" type="text" 
                v-model="cliente.cpf" required placeholder="Informe o cpf do cliente">
                </b-form-input>
                <p class="validation">{{valid.cpf}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="4" sm="12">
            <b-form-group label="E-mail" label-for="cliente-email">
                <b-form-input id="cliente-email" type="text" 
                v-model="cliente.email" required placeholder="Informe o e-mail do cliente">
                </b-form-input>
                <p class="validation">{{valid.email}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col  md="4" sm="12">
            <b-form-group label="Celular" label-for="cliente-celular">
                <b-form-input id="cliente-celular" type="text" 
                v-model="cliente.celular" required placeholder="Informe o celular do cliente">
                </b-form-input>
                <p class="validation">{{valid.celular}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="4" sm="12">
            <b-form-group label="Uf" label-for="cliente-uf">
                <b-form-select v-model="cliente.uf" :options="options"></b-form-select>
                <p class="validation">{{valid.uf}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="4" sm="12">
            <b-form-group label="CEP" label-for="cliente-cep">
                <b-form-input id="cliente-cep" type="text" 
                v-model="cliente.cep" required placeholder="Informe o Cep do cliente">
                </b-form-input>
                <p class="validation">{{valid.cep}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col  md="6" sm="12">
            <b-form-group label="Cidade" label-for="cliente-cidade">
                <b-form-input id="cliente-cidade" type="text" 
                v-model="cliente.cidade" required placeholder="Informe a cidade do cliente">
                </b-form-input>
                <p class="validation">{{valid.cidade}}</p>
            </b-form-group>
        </b-col>
         <b-col  md="6" sm="12">
            <b-form-group label="Bairro" label-for="cliente-bairro">
                <b-form-input id="cliente-bairro" type="text" 
                v-model="cliente.bairro" required placeholder="Informe o bairro do cliente">
                </b-form-input>
                <p class="validation">{{valid.bairro}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col  md="4" sm="12">
            <b-form-group label="Logradouro" label-for="cliente-logradouro">
                <b-form-input id="cliente-logradouro" type="text" 
                v-model="cliente.logradouro" required placeholder="Informe o logradouro do cliente">
                </b-form-input>
                <p class="validation">{{valid.logradouro}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="4" sm="12">
            <b-form-group label="Complemento" label-for="cliente-complemento">
                <b-form-input id="cliente-complemento" type="text" 
                v-model="cliente.complemento" required placeholder="Informe o complemento do cliente">
                </b-form-input>
            </b-form-group>
        </b-col>
         <b-col  md="4" sm="12">
            <b-form-group label="Nº" label-for="cliente-numero">
                <b-form-input id="cliente-numero" type="text" 
                v-model="cliente.numero" required placeholder="Informe o nº">
                </b-form-input>
                <p class="validation">{{valid.numero}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-button type="button" variant="primary" @click="validation">
          Salvar
      </b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle.vue'
import api from '@/Api'
import barramento from '../../config/barramento'

export default {
  name:'ClienteCadastro',
  components:{PageTitle},
  data: function(){
    return{
      mode: 'save',
      cliente:{},
      valid:{nome:'', cpf:'', email:'', celular:'', cep:'', uf:'', cidade:'', logradouro:'', bairro:'', numero:''},
      selected: null,
      options:[
        {value: null, text: 'Informe o UF'},
        {value:'AC', text:'Acre'},
        {value:'AL', text:'Alagoas'},
        {value:'AP', text:'Amapá'},
        {value:'AM', text:'Amazonas'},
        {value:'BA', text:'Bahia'},
        {value:'CE', text:'Ceará'},
        {value:'DF', text:'Distrito'}, 
        {value:'ES', text:'Espirito'},
        {value:'GO', text:'Goiás'},
        {value:'MA', text:'Maranhão'},
        {value:'MS', text:'Mato Grosso do Sul'},
        {value:'MT', text:'Mato' },
        {value:'MG', text:'Minas'},
        {value:'PA', text:'Pará'},
        {value:'PB', text:'Paraíba'},
        {value:'PR', text:'Paraná'},
        {value:'PE', text:'Pernambuco'},
        {value:'PI', text:'Piauí'},
        {value:'RJ', text:'Rio de Janeiro'},
        {value:'RN', text:'Rio Grande do Norte'},  
        {value:'RS', text:'Rio Grande do Sul'},
        {value:'RO', text:'Rondônia'},
        {value:'RR', text:'Roraima'},
        {value:'SC', text:'Santa Catarina'},
        {value:'SP', text:'São Paulo'},
        {value:'SE', text:'Sergipe'},
        {value:'TO', text:'Tocantins'},
      ]
    }
  },
  methods:{
    save(){
     if(!this.cliente.id){
         api.post(`/clientes/`, this.cliente)
         .then(
          res => {
            console.log(res)
            this.$swal('','Salvo com Sucesso','success')
          },
          error => {
            console.log(error.response.data)
            this.$swal('','Não foi possível salvar: '+error.response.data.message,'error')
          },
        )
     }else{
       api.put(`/clientes/${this.cliente.id}`, this.cliente)
       .then(
        res => {
            this.$swal('','Alterado com Sucesso','success')
          },
          error => {
            console.log(error.response.data)
            this.$swal('','Não foi possível alterar: '+error.response.data.message,'error')
          },
        )
     }
     this.cliente = {}
     this.valid = {nome:'', cpf:'', email:'', celular:'', cep:'', uf:'', cidade:'', logradouro:'', bairro:'', numero:''}
    },
    getCliente(payload){
      this.cliente = payload.cliente
    },
    validation(){
      let blocked = false
      this.valid = {nome:'', cpf:'', email:'', celular:'', cep:'', uf:'', cidade:'', logradouro:'', bairro:'', numero:''}
      if(!this.cliente.nome){
        this.valid.nome = 'O nome é obrigatório'
        blocked = true
      }
      if(!this.cliente.cpf){
        this.valid.cpf = 'O CPF é obrigatório'
        blocked = true
      }
      if(!this.cliente.email){
        this.valid.email = 'O e-mail é obrigatório'
        blocked = true
      }
      if(!this.cliente.celular){
        this.valid.celular = 'O celular é obrigatório'
        blocked = true
      }
      if(!this.cliente.uf){
        this.valid.uf = 'O UF é obrigatório'
        blocked = true
      }
      if(!this.cliente.cep){
        this.valid.cep = 'O CEP é obrigatório'
        blocked = true
      }
      if(!this.cliente.cidade){
        this.valid.cidade = 'A cidade é obrigatória'
        blocked = true
      }
      if(!this.cliente.bairro){
        this.valid.bairro = 'O bairro é obrigatório'
        blocked = true
      }
      if(!this.cliente.logradouro){
        this.valid.logradouro = 'O logradouro é obrigatório'
        blocked = true
      }
      if(!this.cliente.numero){
        this.valid.numero = 'O número é obrigatório'
        blocked = true
      }
      if (!blocked)
        this.save()
    }
  },
  mounted(){
    barramento.$on('cliente', cliente =>{
      this.cliente = cliente
    })
  }
}
</script>

<style>
  .validation{
    color: rgba(255, 0, 0, 0.719);
    font-size: small;
  }
</style>