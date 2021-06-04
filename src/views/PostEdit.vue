<template>
  <div>
    <v-card>
      <v-card-title>
        <h2>Edit Post</h2>
      </v-card-title>
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
          <a :href="`/Post/${roomId}`">
            <v-btn @click="updatePoom" class="success mx-0 mt-3"
              >Update Post</v-btn
            >
          </a>
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

      //rvId: this.$route.params.rvId,
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
    async updatePost() {},
  },
};
</script>
