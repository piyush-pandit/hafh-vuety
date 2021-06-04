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
            <v-btn @click="updatePost" class="success mx-0 mt-3"
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
