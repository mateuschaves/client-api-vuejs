<template>
  <div>
    <!-- FILTERS -->
    <div class="row">
      <!-- SEARCH -->
      <div class="input-field col s12 m6 l3">
        <i class="material-icons prefix">search</i>
        <input id="search" type="search" v-model="search" placeholder="Encontre alguém =)">
        <label for="search">Buscar</label>
      </div>
      <!-- SEARCH INFORMATION -->
      <div class="col l5">
        <p class="flow-text center"> [student.length] Alunos encontrados </p>
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
              <tr v-for="student in filteredStudents">
                <td v-show="student.aluno.status == 'Inativo'" class="inactive">{{student.aluno.nome}}</td>
                <td v-show="student.aluno.status !== 'Inativo'">{{student.aluno.nome}}</td>
                <td>{{student.aluno.status}}</td>
                <td>{{student.mensalidade.status}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
    <!-- END TABLE -->
  </div>
</template>
<script>
import searchMixin from '../../mixins/searchMixin';
import $ from 'jquery'

export default {
  data () {
    return {
      students:[],
      search:''
    }
  },
  created(){
          this.$http.get('http://localhost:8000/api/aluno/list').then(response => {
            this.students = response.body;
          });
  },
  computed: {
    // INTRODUÇÃO A PROGRAMAÇÃO ORIENTADA A GAMBIARRAS I
    filteredStudents: function(){
      do {
        if(typeof this.students.alunos != "undefined")
        {
          return this.students.alunos.filter((student) => {
            return student.aluno.nome.match(this.search);
          });
        }
      } while (typeof this.students.alunos != "undefined");
    }
  }
}
</script>

<style>
.inactive{
  color:red;
}
</style>
