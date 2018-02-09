<template>
  <div id="app">
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
