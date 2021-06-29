<template>
  <div class="todo">
    <div class="today-date">
      <h1 class="date">{{ today.day }}<br />{{ today.date }}</h1>
    </div>
    <button type="button" class="btn btn-danger" @click="deleteAll">
      Delete All
    </button>

    <router-link to="add">
      <button type="button" class="btn btn-primary">
        Add task
      </button></router-link
    >

    <div class="task-card">
      <h1 class="task-title text-center">TO DO TAKS</h1>
      <div class="inner-card">
        <ul v-for="(data, index) in newTasks" :key="data.taskTitle">
          
          <li class="task-title text-center">
            <h2 class="text-center">{{ data.taskTitle }}</h2>
          </li>
          <li>Description : {{ data.taskDescription }} {{ index }}</li>
          <div class="task-button">
            <button type="button" class="btn btn-danger" @click="deleteTask">
              Delete
            </button>
            <router-link to="/details">
              <button type="button" class="btn btn-info" @click="taskDetails(index)">
            
                Show Task Details
              </button></router-link
            >
          </div>
          <input type="checkbox" @click="completeTask" />
        </ul>
      </div>
    </div>
    <div class="task-card">
      <h3 class="task-title text-center">COMPLETED TASKS</h3>
      <ul v-for="task in completedTasks" :key="task.taskTitle">
        <li>Task Name {{task.taskTitle}}</li>
        <li>{{task.taskDescription}}</li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTasks: [{}],
      completedTasks: [],

    };
  },

  computed: {
    today: function () {
      var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }

      today = {
        day: weekday[today.getDay()],
        date: mm + "-" + dd + "-" + yyyy,
      };

      return today;
    },
  },
  beforeMount() {
    this.newTasks = JSON.parse(window.localStorage.getItem("tasks"));
    // console.log(this.newTasks);
  },
  updated() {},
  methods: {
    deleteTask(item) {
      this.newTasks.splice(this.newTasks.indexOf(item), 1);
      // console.log(item);

      window.localStorage.setItem("tasks", JSON.stringify(this.newTasks));
    },
    deleteAll() {
      this.newTasks = [];
      this.completedTasks = [];
      window.localStorage.setItem("tasks", JSON.stringify(this.newTasks));
    },
    completeTask(e) {
      let dletedData =this.newTasks.splice(this.newTasks.indexOf(e), 1);
      this.completedTasks.push(...dletedData)
      // window.localStorage.setItem("tasks", JSON.stringify(this.newTasks));
      console.log(this.completedTasks)
  
  },
  taskDetails(index){
    let newData = JSON.parse(window.localStorage.getItem("tasks"))
    newData.forEach((element , id) => {
      console.log(element,index,id)
      if (index == id){
       this.$store.state.tasks.push(...element)
      }
    });
    console.log(this.$store.state.tasks)
  }
  }
};
</script>

<style>
.task-card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
}
ul {
  list-style: none;
}
.task-button {
  display: flex;
  justify-content: space-between;
}
.form-check-input {
  margin: ;
}
.inner-card {
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0.5rem;
  margin: 2rem auto;
  max-width: 40rem;
}
</style>