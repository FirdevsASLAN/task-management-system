<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">All Tasks</h1>
          <div v-if="tasks.length > 0">
            <div v-for="task in tasks" :key="task.id">{{ task.title }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AllTasksView",
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    axios
      .get("http://localhost:5001/api/task")
      .then(({ data }) => {
        this.tasks = data.payload;
        console.log(data.payload);
      })
      .catch((err) => alert(err));
  },
};
</script>
