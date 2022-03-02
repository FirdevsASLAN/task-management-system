<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">Login</h1>
          <v-text-field v-model="email" label="E-mail"></v-text-field>
          <v-btn elevation="2" @click="login">Login</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    login() {
      console.log(this.email);
      this.email = "";
    },
  },
};
</script>
