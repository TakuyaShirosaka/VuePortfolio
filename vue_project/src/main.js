// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import titleMixin from './util/title'
import firebase from 'firebase'

Vue.config.productionTip = false
Vue.mixin(titleMixin)

var config = {
  apiKey: 'AIzaSyA8espppUj2kPZWfs0mQ6BLoLQ6XBSpknQ',
  authDomain: 'vueportfolio-c87e8.firebaseapp.com',
  databaseURL: 'https://vueportfolio-c87e8.firebaseio.com',
  projectId: 'vueportfolio-c87e8',
  storageBucket: 'vueportfolio-c87e8.appspot.com',
  messagingSenderId: '181052250781'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
