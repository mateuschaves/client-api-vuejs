<template>
  <div id="app">
    <div class="navbar-fixed ">
                <nav class="blue darken-3">
                    <ul id="dropdown5" class="dropdown-content">

                        <li><a class="blue-text text-darken-3" href="">Matricular</a></li>
                        <li><a class="blue-text  text-darken-3" href="">Mostrar alunos</a></li>
                        <li><a class="blue-text  text-darken-3" href="">Mostrar Inativos</a></li>

                    </ul>

                    <ul id="dropdown1" class="dropdown-content">
                        <li><a class="blue-text  text-darken-3" href="">Relatórios</a></li>
                        <li><a class="blue-text  text-darken-3" href="">Funcionários</a></li>
                        <li><a class="blue-text  text-darken-3" href="">Administrar Inativos</a></li>
                        <li><a class="blue-text  text-darken-3" href="">Novo funcionário</a></li>

                    </ul>

                    <ul id="dropdown2" class="dropdown-content">
                        <li><a class="blue-text  text-darken-3" href="">Cadastrar Treinos</a></li>
                        <li><a class="blue-text  text-darken-3" href="">Mostrar Treinos</a></li>
                    </ul>

                    <div class="nav-wrapper">
                        <a  class="flow-text center-align">  </a>
                        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons white-text">menu</i></a>
                        <ul class="left hide-on-med-and-down">
                            <li><a class="white-text" href="">Início</a></li>
                            <li><a class="dropdown-button white-text " data-beloworigin="true" data-hover="true" data-constrainwidth="false"  data-activates="dropdown5" href="#">Alunos</a></li>
                            <li><a class="dropdown-button white-text " data-beloworigin="true" data-hover="true" data-constrainwidth="false"  data-activates="dropdown1" href="#">Administração</a></li>
                            <li><a class="dropdown-button white-text " data-beloworigin="true" data-hover="true" data-constrainwidth="false"  data-activates="dropdown2" href="#">Treinos</a></li>
                            <li><a class="dropdown-button white-text " data-beloworigin="true" data-hover="true" data-constrainwidth="false"  data-activates="#" href="">Sair</a></li>
                        </ul>
                        <ul class="right hide-on-med-and-down">
                            <li>  Olá, NAME  </li>
                        </ul>
                        <ul id="mobile-demo" class="side-nav">
                            <li class="no-padding">
                                <ul class="collapsible collapsible-accordion">

                                    <li class="bold"><a class="collapsible-header  waves-effect waves-teal blue-text text-darken-2">Aluno</a>

                                        <div class="collapsible-body">
                                            <ul>
                                                <li><a class="blue-text text-darken-2" href="">Matricular</a></li>
                                                <li><a class="blue-text text-darken-2" href="">Mostrar alunos</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="bold"><a class="collapsible-header  waves-effect waves-teal blue-text text-darken-2">Administração</a>
                                        <div class="collapsible-body">
                                            <ul>
                                                <li><a class="blue-text text-darken-2" href="">Relatórios</a></li>
                                                <li><a class="blue-text text-darken-2" href="">Funcionários</a></li>
                                                <li><a class="blue-text text-darken-2" href="">Novo Funcionário</a></li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li class="bold"><a class="collapsible-header  waves-effect waves-teal blue-text text-darken-2">Treinos</a>
                                        <div class="collapsible-body">
                                            <ul>
                                                <li><a class="blue-text text-darken-2" href="">Cadastrar treinos</a></li>
                                                <li><a class="blue-text text-darken-2" href="">Mostrar treinos</a></li>
                                            </ul>
                                        </div>
                                    </li>


                                    <li class="bold"><a class="collapsible-header  waves-effect waves-teal blue-text text-darken-2">Sair</a>

                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
      <div class="container">
        <div class="row">
          <app-list-alunos></app-list-alunos>
        </div>
      </div>
  </div>
</template>

<script>
import List from './components/students/list.vue';

export default {
  components:{
    'app-list-alunos': List
  },
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
