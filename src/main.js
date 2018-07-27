import Vue from 'vue';
import VueResource from 'vue-resource';
import 'vuetify/dist/vuetify.min.css';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import VueCookie from 'vue-cookie';
import AsyncComputed from 'vue-async-computed';
import Vuetify from 'vuetify';
import App from './App';
import routes from './routes';
import store from './store';

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(VueCookie);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(AsyncComputed);

const router = new VueRouter({
  routes,
  mode: 'history'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});