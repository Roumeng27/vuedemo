import Vue from 'vue'
import Vuex from 'vuex'
import store from './store.js';
Vue.use(Vuex);
const mystore = new Vuex.Store(store);
export default mystore