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
        <!-- <p class="para-title">Add an Image</p> -->
        <v-file-input
          label="Add an Image"
          @change="uploadImage(rvData.image)"
          type="file"
          v-model="rvData.image"
          placeholder="Browse file"
          solo-inverted
          prepend-icon="mdi-camera"
          style="margin: 0px 15px 0px 15px"
        >
        </v-file-input>

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
      //  data: {},
      rvData: { image: "" },
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
    async uploadImage(img) {
      console.log(img);
      const fd = new FormData();
      console.log(fd);
      fd.append("file", img);
      console.log(fd);
      console.log("img=", img);
      var options = {
        method: "POST",
        url: "http://localhost:3002/api/upload",
        headers: {
          "Content-Type":
            "multipart/form-data; boundary=---011000010111000001101001",
        },
        data: fd,
        // formData: fd,
        //data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name=file; filename="Rv2.jpeg"\r\nContent-Type: image/jpeg\r\n\r\n\r\n-----011000010111000001101001--\r\n',
      };

      // console.log(this.data.image);

      const data = await axios.request(options);
      console.log(data);
      data.image = data.data.file;
      // const displayImage = data.image;
      this.rvData.image = data.image;

      //const uploadImage = data.image;
      // console.log(data);
      //console.log(displayImage);
      console.log("uploaded image =", this.rvData.image);
      //console.log(data.image);
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
</style>
