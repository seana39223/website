import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';

Vue.config.productionTip = false;
Vue.use(Vuetify);
Vue.use(VueRouter);


const Qualification = { template: '<p>Hey my name is Sean</p>' };
const routes = [
  { path: '/qualifications', component: Qualification },
];
const router = new VueRouter({
  routes, // short for `routes: routes`
});
new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
