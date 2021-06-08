<template>
  <div>
    <v-card flat>
      <v-container fluid>
        <div>
          <v-toolbar>
            <v-btn icon href="/rv">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title> Edit Post </v-toolbar-title>
          </v-toolbar>
        </div>
      </v-container>
    </v-card>
    <v-card>
      <v-card-text>
        <v-text-field v-model="rvData.name" label="Name Of Rv"></v-text-field>
        <v-text-field
          v-model="rvData.image"
          label="New image"
          prepend-icon="mdi-camera"
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-btn
          @click="updateRv"
          class="success mx-0 mt-3"
          v-on:keyup.enter="updateRv"
          >Update RV</v-btn
        >
      </v-card-text>
    </v-card>
    <!-- <p>{{ data }}</p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "RvEdit",
  data() {
    return {
      title: "RvEdit",
      rvId: this.$route.params.rvId,
      data: {},
      rvData: {},
    };
  },

  async created() {
    //  if (this.$route.params.rvId) {
    this.getRvData();
    //  }
  },

  methods: {
    async getRvData() {
      const options = {
        method: "GET",
        url: `http://localhost:3000/Rv/getById/${this.rvId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
      };

      const gotRvdata = await axios.request(options);
      this.rvData = gotRvdata.data;
      //console.log(this.rvData);
      //console.log(this.rvId);
    },
    async updateRv() {
      const options = {
        method: "PUT",
        url: "http://localhost:3000/RV/update",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          _id: this.rvData._id,
          name: this.rvData.name,
          image: this.rvData.image,
        },
      };

      const updateRv = await axios.request(options);
      console.log(updateRv);
      this.$router.push({
        name: "Rv",
        params: { rvId: this.rvId },
      });
      return;
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
