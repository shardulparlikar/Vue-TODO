<template>
<router-view />
 

</template>

<script>
// import LoginPage from './components/LoginPage.vue'
// import Register from './components/Register.vue'
import firebase from 'firebase'
import {useRouter , useRoute} from 'vue-router'
import onBeforeMount from 'vue'


export default {
  name: 'App',
 setup(){


  const  router = useRouter()
  const  route = useRoute()
    

  onBeforeMount(() => {
    firebase.auth().onAuthStateChanged((user)=>{
      if(!user){
        router.replace('/login')
      }else if (route.path=='/login' || route.path=='/register'){
       router.replace('/home')
      }
    })
  })
 }
}
    
  
</script>

<style>

</style>
