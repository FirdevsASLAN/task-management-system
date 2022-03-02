import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AllTasksView from "@/views/AllTasksView.vue";
import EditTaskView from "@/views/EditTaskView.vue";
import LoginView from "@/views/LoginView.vue";
import MyTasksView from "@/views/MyTasksView.vue";
import NewTaskView from "@/views/NewTaskView.vue";
import PendingTasksView from "@/views/PendingTasksView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/all-tasks",
    name: "all-tasks",
    component: AllTasksView,
  },
  {
    path: "/edit-task/:id",
    name: "edit-task",
    component: EditTaskView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/my-tasks",
    name: "my-tasks",
    component: MyTasksView,
  },
  {
    path: "/new-tasks",
    name: "new-tasks",
    component: NewTaskView,
  },
  {
    path: "/pending-tasks",
    name: "pending-tasks",
    component: PendingTasksView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
