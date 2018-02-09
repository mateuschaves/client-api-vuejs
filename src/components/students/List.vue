<template>
  <div>
    <!-- FILTERS -->
    <div class="row">
      <!-- SEARCH -->
      <div class="input-field col s12 m6 l3">
        <i class="material-icons prefix">search</i>
        <input id="search" type="search" >
        <label for="search">Buscar</label>
      </div>
      <!-- SEARCH INFORMATION -->
      <div class="col l5">
        <p class="flow-text center"> 148 Alunos encontrados </p>
      </div>
      <!-- SELECT -->
      <div class="input-field col s12 m6 l3 push-l1">
         <select>
           <option value="" disabled selected>Escolha uma opção</option>
           <option value="1">Mensalidades pagas</option>
           <option value="2">Mensalidades atrasadas</option>
           <option value="3">Mensalidades a vencer</option>
           <option value="3">Alunos inativos</option>
           <option value="3">Alunos ativos</option>
         </select>
         <label>Filtrar por</label>
       </div>
    </div>
    <!-- TABLE -->
    <div class="row">
      <div class="col l12 ">
        <table class="bordered highlight">
            <thead>
              <tr>
                  <th>Nome</th>
                  <th>Situação</th>
                  <th>Mensalidade</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="aluno in alunos">
                <td>{{aluno.nome}}</td>
                <td>{{aluno.status}}</td>
                <td>{{aluno.mensalidade}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <!-- END TABLE -->
  </div>
</template>
<script>
import $ from 'jquery'

export default {
  data () {
    return {
      alunos:[
        {nome: 'Mateus Henrique', status:'Ativo', mensalidade:'Débito'},
        {nome: 'Miau A', status:'Inativo', mensalidade:'Pago'}
      ]
    }
  }
}
</script>

<style>
</style>
