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
import axios from "axios";

export default {
  name: "LoginView",
  data() {
    return {
      email: "",
    };
  },
  methods: {
    login() {
      axios
        .post("http://localhost:5001/api/auth/login", { email: this.email })
        .then(({ data }) => {
          console.log(data.payload);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${data.payload.jwtToken}`;
          this.$router.push("/all-tasks");
        })
        .catch((err) => alert(err));
      console.log(this.email);
      this.email = "";
    },
  },
};
</script>
