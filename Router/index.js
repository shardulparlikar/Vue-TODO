import  {createRouter,createWebHistory } from 'vue-router' 
// import App from '../src/App.vue'
import LoginPage from '../src/components/LoginPage.vue'

import TodoList from '../src/components/TodoList.vue'
import AddTOdo from '../src/components/AddTOdo.vue'
import ListDetails from '../src/components/ListDetails.vue'

const routes = [{
// path : '/',
// name : 'App',
// component : App


// },
// {
    path : '/',
name : 'Login',
component : LoginPage
},{
    path : '/register',
    name : 'Register',
    component : ()=> import('../src/components/Register.vue')
},
{
    path : '/lists',
    name : 'Lists',
    component : TodoList,
    meta: { requiresAuth: false }
},
{
    path : '/add',
    name : 'add',
    component : AddTOdo,
    meta: { requiresAuth: false }
},
{
    path : '/details',
    name : 'details',
    component : ListDetails,
    meta: { requiresAuth: false }
}


]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router