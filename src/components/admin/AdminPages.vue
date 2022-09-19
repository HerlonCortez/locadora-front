<template>
  <div class="admin-pages">
    <PageTitle  icon="fa fa-cogs" main="Administração do Sistema" sub="Cadastros"/>
    <div class="admin-page-tabs">
      <b-card no-body>
          <b-tabs card>
              <b-tab title="Cliente" active>
                <ClienteAdmin/>
              </b-tab>
               <b-tab title="Editoras" active>

              </b-tab>
               <b-tab title="Livros" active>

              </b-tab>
          </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>

import PageTitle from '../template/PageTitle.vue'
import ClienteCadastro from '../cliente/ClienteCadastro.vue'

export default {
  name: 'AdminPages',
  components: {PageTitle, ClienteCadastro}
}
</script>

<style>

</style>