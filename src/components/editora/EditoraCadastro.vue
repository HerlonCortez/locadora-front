<template>
    <div class="editora-cadastro">
      <PageTitle  icon="fa fa-cogs" main=" Área do Editora" sub="Cadastro"/>
    <b-card>
    <b-form v-on:submit.prevent>
      <input id="editora.id" type="hidden" v-model="editora.id"/>
      <b-row>
        <b-col  md="12" sm="12">
            <b-form-group label="Descrição" label-for="editora-descricao">
                <b-form-input id="editora-descricao" type="text" 
                v-model="editora.descricao" required placeholder="Informe o nome da editora">
                </b-form-input>
                <p class="validation">{{valid.descricao}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col  md="4" sm="12">
            <b-form-group label="Uf" label-for="editora-uf">
                <b-form-select v-model="editora.uf" :options="options"></b-form-select>
                <p class="validation">{{valid.uf}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="8" sm="12">
            <b-form-group label="Cidade" label-for="editora-cidade">
                <b-form-input id="editora-cidade" type="text" 
                v-model="editora.cidade" required placeholder="Informe a cidade da editora">
                </b-form-input>
                <p class="validation">{{valid.cidade}}</p>
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
import PageTitle from  '../template/PageTitle.vue'
import api from '@/Api'
import barramento from '../../config/barramento'
export default {
  name:'EditoraCadastro',
  components:{PageTitle},
  data: function(){
    return{
      mode: 'save',
      editora:{},
      valid:{descricao:'', uf:'', cidade:''},
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
     if(!this.editora.id){
         api.post(`/editoras/`, this.editora)
         .then(
          res => {
            this.$swal('','Salvo com Sucesso','success')
          },
          error => {
            console.log(error.response.data)
            this.$swal('','Não foi possível salvar: '+error.response.data.message,'error')
          },
        )
     }else{
       api.put(`/editoras/${this.editora.id}`, this.editora)
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
     this.editora = {}
     this.valid = {descricao:'', uf:'', cidade:''}
    },
    geteditora(payload){
      this.editora = payload.editora
    },
    validation(){
      let blocked = false
      this.valid = {descricao:'', uf:'', cidade:''}
      if(!this.editora.descricao){
        this.valid.descricao = 'A descrição é obrigatória'
        blocked = true
      }
      if(!this.editora.uf){
        this.valid.uf = 'O UF é obrigatório'
        blocked = true
      }
      if(!this.editora.cidade){
        this.valid.cidade = 'A cidade é obrigatória'
        blocked = true
      }
      if (!blocked)
        this.save()
    }
  },
  mounted(){
    barramento.$on('editora', editora =>{
      this.editora = editora
    })
  }
}
</script>
<style>

</style>