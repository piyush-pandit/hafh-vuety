<template>
  <div>
    <v-app id="inspire">
      <v-card flat>
        <v-container fluid>
          <div>
            <v-toolbar>
              <v-btn icon href="">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>

              <v-toolbar-title> Add an Rv </v-toolbar-title>
            </v-toolbar>
          </div>
        </v-container>
      </v-card>
      <br />

      <v-form class="px-3">
        <!-- <v-text-field v-model="data.title" label="Name Of Rv"></v-text-field> -->
        <p class="para-title">Name of Rv</p>
        <v-text-field
          v-model="data.title"
          placeholder="Family Rv"
          solo-inverted
          style="margin: 0px 20px 0px 20px"
        >
        </v-text-field>
        <p class="para-title">Add an Image</p>

        <v-text-field
          v-model="data.image"
          prepend-icon="mdi-camera"
        ></v-text-field>

        <v-spacer></v-spacer>
      </v-form>
      <br />
      <div class="text-center">
        <v-btn
          @click="createNewRv"
          style="width: 100px"
          rounded
          color="#ffab01"
          dark
        >
          Add Rv
        </v-btn>
      </div>

      <!-- <router-link :to="{ name: 'Rv' }">
        
        <v-btn @click="createNewRv" class="success mx-0 mt-3">Add RV</v-btn>
      </router-link> -->
      <br />
      <div class="text-center">
        <v-btn outlined rounded color="#ffab01" dark>
          <v-icon style="padding-right: 5px"> mdi-share </v-icon>
          Share with people
        </v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      // rvData: "",
      data: {},
    };
  },

  methods: {
    async createNewRv() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/RV/create",
        headers: { "Content-Type": "application/json" },
        data: {
          name: this.data.title,
          image: this.data.image,
          creator: "507f1f77bcf86cd799439014",
        },
      };

      const newRv = await axios.request(options);
      console.log(newRv);
    },
  },
};
</script>

<style scoped>
.para-title {
  margin-right: 60%;
}
/* .v-btn {
  width: 100px;
} */
</style>
