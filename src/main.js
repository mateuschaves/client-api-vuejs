import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1MTgyNjM4MDYsImV4cCI6MTUxODI5MzgwNiwibmJmIjoxNTE4MjYzODA2LCJqdGkiOiJxeE1UamxNUmxRRTl1U0tGIiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.2BERXNyfw0WWH9Xf_W_ggyEpGQtI00h2kiuH_6ohz9k';

new Vue({
  el: '#app',
  render: h => h(App)
})
