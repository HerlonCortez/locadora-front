<template>
  <aside class="menu" v-show="isMenuVisible">
    <b-card no-body class="mb-1 card">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.cliente class="bt">Clientes</b-button>
      </b-card-header>
      <b-collapse id="cliente" accordion="my-accordion" role="tabpanel">
        <b-card-body class="cliente-body">
          <b-nav vertical class="w-25">
            <b-nav-item active>
              <router-link to="/cliente">Cadastro</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/clienteLista">Listagem</router-link>
            </b-nav-item>
          </b-nav>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 card">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.editora class="bt">Editoras</b-button>
      </b-card-header>
      <b-collapse id="editora" accordion="my-accordion" role="tabpanel">
        <b-card-body class="editora-body">
          <b-nav vertical class="w-25">
            <b-nav-item active>
              <router-link to="/editora">Cadastro</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/editoraLista">Listagem</router-link>
            </b-nav-item>
          </b-nav>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1 card">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block v-b-toggle.livro class="bt">Livros</b-button>
      </b-card-header>
      <b-collapse id="livro" accordion="my-accordion" role="tabpanel">
        <b-card-body class="livro-body">
          <b-nav vertical class="w-25">
            <b-nav-item active>
              <router-link to="/livro">Cadastro</router-link>
            </b-nav-item>
            <b-nav-item>
              <router-link to="/elivroLista">Listagem</router-link>
            </b-nav-item>
          </b-nav>
        </b-card-body>
      </b-collapse>
    </b-card>
  </aside>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Menu',
  computed: mapState(['isMenuVisible'])
}
</script>

<style>
  .menu{
    grid-area: menu;
    background: linear-gradient(to right,#232526, #414345);

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .card{
    margin: 5px;
  }
  .cliente-body{
    background: rgba(211, 211, 211, 0.2);
  }
</style>