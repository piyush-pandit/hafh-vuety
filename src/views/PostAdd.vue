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

        <p class="para-title">Add an Image{{ data.image }}</p>
        <v-text-field
          v-model="data.image"
          prepend-icon="mdi-camera"
        ></v-text-field>
      </v-form>
      <br />
      <div class="text-center">
        <v-btn
          @click="createNewPost"
          style="width: 130px"
          rounded
          color="#ffab01"
          dark
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
        headers: { "Content-Type": "application/json" },
        data: {
          name: this.data.name,
          image: this.data.image,
          creator: "507f1f77bcf86cd799439014",
          Room: this.roomId,
        },
      };

      const newPostCreated = await axios.request(options);
      // route to new url
      this.$router.go({
        name: "Post",
        params: { rvId: this.rvId, roomId: this.roomId },
      });
      this.newPost = newPostCreated.data.data;
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
