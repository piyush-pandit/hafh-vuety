<template>
  <div id="app">
    <v-app id="inspire">
      <v-card flat>
        <v-container fluid>
          <div>
            <v-toolbar>
              <v-btn icon :href="`/post/${rvId}/${roomId}`">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>

              <v-toolbar-title> Add Post </v-toolbar-title>
            </v-toolbar>
          </div>
        </v-container>
      </v-card>
      <br />
      <v-form>
        <p class="para"></p>
        <v-text-field
          v-model="data.name"
          placeholder="Add a Status"
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
      </v-form>
      <br />
      <div class="text-center">
        <v-btn
          @click="createNewPost"
          style="width: 130px"
          rounded
          color="#ffab01"
          dark
          v-on:keyup.enter="createNewPost"
        >
          Post this
        </v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: " PostAdd",
  data() {
    return {
      title: "PostAdd",
      roomId: this.$route.params.roomId,
      rvId: this.$route.params.rvId,

      data: {},
      newPost: [],
    };
  },

  methods: {
    async createNewPost() {
      var options = {
        method: "POST",
        url: "http://localhost:3000/Post/create",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          name: this.data.name,
          image: this.data.image,

          Room: this.roomId,
        },
      };

      const newPostCreated = await axios.request(options);
      this.newPost = newPostCreated.data.data;
      // route to new url
      this.$router.push({
        name: "Post",
        params: { rvId: this.rvId, roomId: this.roomId },
      });
      return;
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
      };

      const data = await axios.request(options);
      this.data.image = data.data.file;

      console.log(data);
    },
  },
};
</script>

<style scoped>
.v-application a {
  color: white;
}

a {
  text-decoration: none;
}
.para-title {
  margin-right: 60%;
}

.para {
  margin-right: 60%;
}
/* .v-btn {
  width: 100px;
} */
</style>
