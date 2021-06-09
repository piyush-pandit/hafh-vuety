<template>
  <div>
    <v-card flat>
      <v-container fluid>
        <div>
          <v-toolbar>
            <v-btn icon :href="`/Post/${rvId}/${roomId}`">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title> Edit Post </v-toolbar-title>
          </v-toolbar>
        </div>
      </v-container>
    </v-card>
    <br />
    <v-card>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            v-model="postData.name"
            label="Name Of Post"
          ></v-text-field>
          <v-file-input
            label="Add an Image"
            @change="uploadImage(postData.image)"
            type="file"
            v-model="postData.image"
            placeholder="Browse file"
            solo-inverted
            prepend-icon="mdi-camera"
            style="margin: 0px 15px 0px 15px"
          >
          </v-file-input>

          <v-spacer></v-spacer>

          <v-btn
            @click="updatePost"
            class="success mx-0 mt-3"
            :href="`/Post/${rvId}/${roomId}`"
            v-on:keyup.enter="updatePost"
            >Update Post</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
    <!-- <p>{{ data }}</p> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostEdit",
  data() {
    return {
      title: "PostEdit",
      roomId: this.$route.params.roomId,
      postId: this.$route.params.postId,

      rvId: this.$route.params.rvId,
      //data: {},
      roomData: {},
      postData: [],
    };
  },

  async created() {
    //  if (this.$route.params.rvId) {
    this.getPostData();
    //  }
  },

  methods: {
    async getPostData() {
      //console.log(this.roomId);
      const options = {
        method: "GET",
        url: `http://localhost:3000/Post/getById/${this.postId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
      };

      const gotPostData = await axios.request(options);
      this.postData = gotPostData.data;
    },
    async updatePost() {
      var options = {
        method: "PUT",
        url: "http://localhost:3000/Post/update",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          _id: this.postData._id,
          name: this.postData.name,
          image: this.postData.image,
        },
      };

      axios.request(options);

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
      };

      const data = await axios.request(options);
      console.log(data);
      data.image = data.data.file;
      this.postData.image = data.image;

      console.log("uploaded image =", this.postData.image);
    },
  },
};
</script>
<style scoped>
.line {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #abb7b7;
  line-height: 0.1em;
  margin: 10px 0 20px;
  color: #abb7b7;
}

.line span {
  background: #fff;
  padding: 0 10px;
}
</style>
