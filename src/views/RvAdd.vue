<template>
  <div>
    <!-- <v-text-field placeholder="Family Rv" v-model="rvData"> </v-text-field>
    <p>Rv Data: {{ rvData }}</p> -->
    <v-card>
      <v-card-title>
        <h2>Add an Rv</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="data.title" label="Name Of Rv"></v-text-field>
          <v-text-field
            v-model="data.image"
            label="Add an Image"
            prepend-icon="mdi-camera"
          ></v-text-field>

          <v-spacer></v-spacer>
          <v-btn @click="createNewRv" class="success mx-0 mt-3">Add RV</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- <p>{{ data }}</p> -->
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
