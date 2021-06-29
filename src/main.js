import { createApp } from 'vue'
import App from './App.vue'
import router from '../Router/index'
import firebase from 'firebase'
import {createStore} from 'vuex'

 const store  = createStore({
   state (){
     return {
       tasks :[]
     }
   }
 })

const firebaseConfig = {
    apiKey: "AIzaSyBpY6AKKWSz9J2BOtcxwtscpeFxpJFU_Dw",
    authDomain: "vue-tolist.firebaseapp.com",
    projectId: "vue-tolist",
    storageBucket: "vue-tolist.appspot.com",
    messagingSenderId: "163176702938",
    appId: "1:163176702938:web:4bb17497fada531c0896e3",
    measurementId: "G-JP4M93HXJ0"
  };
  firebase.initializeApp( firebaseConfig )
createApp(App).use(router).use(store).mount('#app')
