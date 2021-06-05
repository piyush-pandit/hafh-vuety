<template>
  <div>
    <v-card>
      <v-card-title>
        <h2>Edit an Rv</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field v-model="rvData.name" label="Name Of Rv"></v-text-field>
          <v-text-field
            v-model="rvData.image"
            label="New image"
            prepend-icon="mdi-camera"
          ></v-text-field>

          <v-spacer></v-spacer>
          <router-link :to="{ name: 'Rv' }">
            <v-btn @click="updateRv" class="success mx-0 mt-3">Update RV</v-btn>
          </router-link>
        </v-form>
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
        headers: { "Content-Type": "application/json" },
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
        headers: { "Content-Type": "application/json" },
        data: {
          _id: this.rvData._id,
          name: this.rvData.name,
          image: this.rvData.image,
          creator: "507f1f77bcf86cd799439014",
        },
      };

      const updateRv = await axios.request(options);
      console.log(updateRv);
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
