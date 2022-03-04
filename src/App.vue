<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn text class="mr-6">
        <router-link
          class="white--text text-decoration-none"
          :to="'/all-tasks'"
        >
          All Tasks
        </router-link>
      </v-btn>
      <v-btn text class="mr-6">
        <router-link class="white--text text-decoration-none" :to="'/my-tasks'">
          My Tasks
        </router-link>
      </v-btn>
      <v-btn text class="mr-6">
        <router-link
          class="white--text text-decoration-none"
          :to="'/new-tasks'"
        >
          New Tasks
        </router-link>
      </v-btn>
      <v-btn text class="mr-6">
        <router-link
          class="white--text text-decoration-none"
          :to="'/Pending-tasks'"
        >
          Pendind Tasks
        </router-link>
      </v-btn>
      <v-btn text class="mr-6">
        <router-link class="white--text text-decoration-none" :to="'/login'">
          Login
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
