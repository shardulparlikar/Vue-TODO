<template>
<H1 class="task-title text-center">Task Details</H1>
  <ul v-for="data in taskLists " :key='data.taskTitle' class="task-card">
<li><h1 class="task-title text-center">{{data.taskTitle}}</h1></li>

<li>Task Description : {{data.taskDescription}}</li>

<router-link to='lists' ><button type="button" class="btn btn-danger" @click="deleteTask()">Delete Task</button> </router-link>

  </ul>
</template>

<script>
export default {
data() {
  return {
    taskLists : this.$store.state.tasks
  }
},
beforeMount(){
  
  console.log(this.$store.state.tasks)
},
methods: {
  deleteTask(item){
    this.taskLists.splice(this.newTasks.indexOf(item), 1);
  }
},

}
</script>

<style>
.task-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>