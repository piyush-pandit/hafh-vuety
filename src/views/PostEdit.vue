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
          <v-text-field
            v-model="postData.image"
            label="New image"
            prepend-icon="mdi-camera"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn
            @click="updatePost"
            class="success mx-0 mt-3"
            :href="`/Post/${rvId}/${roomId}`"
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
      };

      const gotPostData = await axios.request(options);
      this.postData = gotPostData.data;
    },
    async updatePost() {
      var options = {
        method: "PUT",
        url: "http://localhost:3000/Post/update",
        headers: { "Content-Type": "application/json" },
        data: {
          _id: this.postData._id,
          name: this.postData.name,
          image: this.postData.image,
          creator: "507f1f77bcf86cd799439014",
        },
      };

      axios.request(options);

      this.$router.push({
        name: "Post",
        params: { rvId: this.rvId, roomId: this.roomId },
      });
      return;
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
