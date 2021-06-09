<template>
  <div>
    <v-card class="mx-auto" height="100px">
      <v-img
        style="border-radius: 0px 0px 15px 15px"
        src="https://imagebee.org/vehicles/motorhome/motorhome-3-1600x1060.jpg"
      >
      </v-img>
      <h2 style="padding-top: 50px">
        Home <span style="color: #ffab01"> Away From </span> Home
      </h2>
      <v-spacer />

      <v-row align="center" justify="space-around">
        <v-col md="4">
          <v-btn
            style="width: 130px; margin: 60px 10px 0px 20px"
            rounded
            color="#ffab01"
            dark
            href="/signup"
          >
            Sign Up
          </v-btn>
        </v-col>

        <v-col md="4">
          <v-btn
            style="width: 130px; margin: 60px 20px 0px 10px"
            outlined
            rounded
            color="#ffab01"
            dark
            href="/login"
          >
            Login
          </v-btn>
        </v-col>
      </v-row>

      <div class="text-center">
        <v-btn
          class="googleBtn"
          style="color: #000000"
          rounded
          color="#F5F5F5"
          dark
          href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"
        >
          <v-icon style="padding-right: 5px; color: black">mdi-google</v-icon>
          Login with Google
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
};
</script>

<style scoped>
.googleBtn {
  box-shadow: 1px 12px 10px -8px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all ease-in-out 300ms;
  text-transform: uppercase;
  margin-top: 50px;
  color: black;
  width: 55%;
  text-transform: capitalize;
}
</style>
