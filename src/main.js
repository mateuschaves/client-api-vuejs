import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE1MTgxOTgxMDgsImV4cCI6MTUxODIyODEwOCwibmJmIjoxNTE4MTk4MTA4LCJqdGkiOiJuN1JFZFZxd2xTVTZUWTBpIiwic3ViIjoyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.Vzj8We8tUu2Ec2WjtOGZzU4P8gBuq4-0mBcQWEZpq3I';

new Vue({
  el: '#app',
  render: h => h(App)
})
