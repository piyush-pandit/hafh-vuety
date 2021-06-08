<template>
  <div>
    <v-toolbar>
      <v-spacer />
      <v-toolbar-title> Register </v-toolbar-title>
      <v-spacer />
    </v-toolbar>

    <v-content class="content">
      <v-card>
        <h2 style="padding-top: 20px">
          Home <span style="color: #ffab01"> Away From </span> Home
        </h2>
        <v-spacer />
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation class="form-input">
            <v-text-field
              prepend-icon="mdi-account-circle"
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Username"
              required
            ></v-text-field>

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
              label="Password"
              v-model="password"
              :rules="passwordRules"
              error-count="5"
              :type="showPassword ? 'text' : 'password'"
              required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <v-text-field
              prepend-icon="mdi-lock"
              label="Confirm Password"
              v-model="confirmPassword"
              :rules="confirmPasswordRules.concat(passwordConfirmationRule)"
              :type="showPassword ? 'text' : 'password'"
              required
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>

            <div class="text-center">
              <v-btn
                rounded
                color="#ffab01"
                dark
                block
                @click="signUp"
                v-on:keyup.enter="signUp"
              >
                Sign Up
              </v-btn>
            </div>
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
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    confirmPassword: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 5) || "Password must have 5+ characters",
      (v) => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
      (v) => /(?=.*\d)/.test(v) || "Must have one number",
      (v) => /([!@$%])/.test(v) || "Must have one special character [!@#$%]",
    ],
    confirmPasswordRules: [(v) => !!v || "Password is required"],
  }),
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.password === this.confirmPassword || "Password must match";
    },
  },
  methods: {
    async signUp() {
      var options = {
        method: "POST",
        url: "http://localhost:3001/user/signup",
        headers: { "Content-Type": "application/json" },
        data: {
          email: this.email,
          //mobile: "9819222221",
          name: this.name,
          password: this.password,
        },
      };

      await axios.request(options).then((response) => {
        // console.log(response);
        if (response.data.accessToken && response.data.accessToken) {
          // console.log(response.data.accessToken);
          localStorage.name = response.data.name + " " + response.data.name;
          // console.log(response.data.name);
          localStorage.accesstoken = response.data.accessToken;
          localStorage.userid = response.data._id;
          this.$router.push({
            name: "Rv",
          });
        }
      });

      // this.$router.push({
      //   name: "Rv",
      // });
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
