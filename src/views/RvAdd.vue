<template>
  <div>
    <v-app id="inspire">
      <v-card flat>
        <v-container fluid>
          <div>
            <v-toolbar>
              <v-btn icon href="/rv">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>

              <v-toolbar-title> Add an Rv </v-toolbar-title>
            </v-toolbar>
          </div>
        </v-container>
      </v-card>
      <br />

      <p class="para-title">Name of Rv</p>
      <v-text-field
        v-model="data.title"
        placeholder="Family Rv"
        solo-inverted
        style="margin: 0px 20px 0px 20px"
      >
      </v-text-field>
      <p class="para-title">Add an Image</p>
      <v-file-input
        @change="uploadImage(data.image)"
        type="file"
        v-model="data.image"
        placeholder="Browse file"
        solo-inverted
        prepend-icon="mdi-camera"
        style="margin: 0px 15px 0px 15px"
      >
      </v-file-input>

      <!-- <v-text-field
        v-model="data.image"
        prepend-icon="mdi-camera"
      ></v-text-field> -->

      <v-spacer></v-spacer>
      <!-- </v-form> -->
      <br />
      <div class="text-center">
        <v-btn
          @click="createNewRv()"
          style="width: 100px"
          rounded
          color="#ffab01"
          dark
          v-on:keyup.enter="createNewRv()"
        >
          Add Rv
        </v-btn>
      </div>
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
      //displayImage: "",
    };
  },

  methods: {
    async createNewRv() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/RV/create",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          name: this.data.title,
          image: this.data.image,
          //image: this.displayImage,
        },
      };
      await axios.request(options);
      this.$router.push({
        name: "Rv",
      });
      //  this.uploadImage();
      return false;
    },
    async uploadImage(img) {
      console.log(img);
      const fd = new FormData();
      console.log(fd);
      fd.append("file", img);
      console.log("fd=", fd);
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
      this.data.image = data.data.file;
      // const displayImage = this.data.image;

      //const uploadImage = data.image;
      console.log(data);
      // console.log("uploaded image =", displayImage);
      //console.log(data.image);
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
