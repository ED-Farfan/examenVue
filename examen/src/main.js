import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
// Cargamos Firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyD_DiK13e0ZYjhjCWQ4n7oBHQzlCN3TQOI",
  authDomain: "examen-dc7fb.firebaseapp.com",
  databaseURL: "https://examen-dc7fb.firebaseio.com",
  projectId: "examen-dc7fb",
  storageBucket: "examen-dc7fb.appspot.com",
  messagingSenderId: "1082726360013",
  appId: "1:1082726360013:web:9d102301e143167b34da84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
