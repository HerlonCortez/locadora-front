<template>
    <div class="livro-cadastro">
      <PageTitle  icon="fa fa-cogs" main=" Área do livro" sub="Cadastro"/>
    <b-card>
    <b-form v-on:submit.prevent>
      <input id="livro.id" type="hidden" v-model="livro.id"/>
      <b-row>
        <b-col  md="12" sm="12">
            <b-form-group label="Descrição" label-for="livro-descricao">
                <b-form-input id="livro-descricao" type="text" 
                v-model="livro.descricao" required placeholder="Informe o nome da livro">
                </b-form-input>
                <p class="validation">{{valid.descricao}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col  md="12" sm="12">
            <b-form-group label="Editora" label-for="livro-editora">
                <b-form-select v-model="editoraId">
                  <option v-for="option in options" :value="option.id">{{option.descricao}}</option>
                </b-form-select>
                <p class="validation">{{valid.editora}}</p>
            </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col  md="6" sm="12">
            <b-form-group label="Autor" label-for="livro-autor">
                <b-form-input id="livro-autor" type="text" 
                v-model="livro.autor" required placeholder="Informe o autor da livro">
                </b-form-input>
                <p class="validation">{{valid.autor}}</p>
            </b-form-group>
        </b-col>
        <b-col  md="6" sm="12">
            <b-form-group label="Lançamento" label-for="livro-lancamento">
                <b-form-input id="livro-lancamento" type="text" 
                v-model="livro.lancamento" required placeholder="Informe o lançamento da livro">
                </b-form-input>
                <p class="validation">{{valid.lancamento}}</p>
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
  name:'livroCadastro',
  components:{PageTitle},
  data: function(){
    return{
      mode: 'save',
      livro:{
        id:'',
        descricao:'',
        editora:{},
        autor:'',
        lancamento:''
      },
      editoraId:'',
      valid:{descricao:'', editora:'', autor:'', lancamento:''},
      selected: null,
      options:[]
    }
  },
  methods:{
    async save(){
    const response = await this.getEditora(this.editoraId)
    if(!this.livro.id){
         api.post(`/livros/`, this.livro)
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
       api.put(`/livros/${this.livro.id}`, this.livro)
       .then(
          res => {
            this.$swal('','Alterado com Sucesso','success')
          },
          error => {
            this.$swal('','Não foi possível alterar: '+error.response.data.message,'error')
          },
        )
     }
     this.livro = {}
     this.valid = {descricao:'', editora:'', autor:'', lancamento:''}
    },
    loadEditoras(){
        api.get(`/editoras`).then(
          res => {
                this.options = res.data
            })
    },
    async getEditora(id){
     const response = await api.get(`/editoras/${id}`).then(res =>{
        this.livro.editora = res.data
        return true
     }).catch(error =>{
        return error
     })
     return response
    },
    getlivro(payload){
      this.livro = payload.livro
    },
    validation(){
      let blocked = false
      this.valid = {descricao:'', editora:'', autor:'', lancamento:''}
      if(!this.livro.descricao){
        this.valid.descricao = 'A descrição é obrigatória'
        blocked = true
      }
      if(!this.editoraId){
        this.valid.editora = 'A editora é obrigatória'
        blocked = true
      }
      if(!this.livro.autor){
        this.valid.autor = 'O autor é obrigatório'
        blocked = true
      }
      if(!this.livro.lancamento){
        this.valid.lancamento = 'O lançamento é obrigatório'
        blocked = true
      }
      if (!blocked)
        this.save()
    }
  },
  mounted(){
    this.loadEditoras()
    barramento.$on('livro', livro =>{
      this.livro = livro
      this.editoraId = this.livro.editora.id
    })
  }
}
</script>
<style>

</style>