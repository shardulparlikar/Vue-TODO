<template>
  <div class="addtask">
    <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Task name</label>
     <input type="text" class="form-control" v-model="taskName">
    
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="taskDescription"></textarea>
  </div>
</form>
<router-link to='lists'><button type="button" class="btn btn-primary" @click="pushTask">Add Task</button></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName : '',
      taskDescription : ''
    }
  },
methods : {
    pushTask(){
      if (this.taskName!=''&& this.taskDescription!=''){
        this.$store.state.tasks.push({
            taskTitle : this.taskName,
            taskDescription : this.taskDescription,
            
        })
      }else{
        alert('add Task')
      }
        
      
        
        window.localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks));
        // console.log(this.$store.state.tasks)
    }

}
}
</script>

<style>

</style>