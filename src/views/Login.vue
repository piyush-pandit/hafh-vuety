<template>
  <div>
    <v-toolbar>
      <v-spacer />
      <v-toolbar-title> Login </v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-content class="content">
      <v-card>
        <h2 style="padding-top: 20px">
          Home <span style="color: #ffab01"> Away From </span> Home
        </h2>
        <v-spacer />
        <v-card-text>
          <v-form v-model="valid" class="form-input">
            <v-text-field
              prepend-icon="mdi-email"
              label="E-mail"
              v-model="email"
              :rules="emailRules"
              placeholder="Enter your email "
              type="email"
            ></v-text-field>

            <v-text-field
              prepend-icon="mdi-lock"
              label="Passwords"
              placeholder="Enter your Passwords"
              v-model="password"
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <div class="text-center">
              <v-btn rounded color="#ffab01" dark block href="/rv">
                Sign In
              </v-btn>
            </div>

            <p style="padding-top: 20px; margin-right: 60px">
              Dont have an account?
              <a>
                <span style="color: #ffab01" @click="login"
                  >Signup here !</span
                ></a
              >
            </p>
          </v-form>
        </v-card-text>
      </v-card>
    </v-content>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is Required",
      (v) =>
        !v ||
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    async login() {
      const options = {
        method: "POST",
        url: "http://localhost:3001/user/login",
        headers: { "Content-Type": "application/json" },
        data: { email: this.email, password: this.password },
      };

      await axios.request(options);
      this.$router.push({
        name: "Rv",
      });
    },
  },
};
</script>

<style scoped>
.content {
  margin: 80px 15px 0px 15px;
}

.form-input >>> .error--text {
  color: rgba(206, 12, 12, 0.7) !important;
}
.form-input >>> input {
  caret-color: rgb(218, 214, 214) !important;
}
</style>
