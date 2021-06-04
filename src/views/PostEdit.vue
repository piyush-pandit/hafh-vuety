<template>
  <div>
    <v-card>
      <v-card-title>
        <h2>Edit Post</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3">
          <v-text-field
            v-model="roomData.name"
            label="Name Of Room"
          ></v-text-field>
          <v-text-field
            v-model="roomData.image"
            label="New image"
            prepend-icon="mdi-camera"
          ></v-text-field>

          <v-spacer></v-spacer>
          <a :href="`/room/${rvId}`">
            <v-btn @click="updateRoom" class="success mx-0 mt-3"
              >Update Room</v-btn
            >
          </a>
        </v-form>
      </v-card-text>
    </v-card>
    <!-- <p>{{ data }}</p> -->
  </div>
</template>

<script>
//import axios from "axios";
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
    },
    async updatePost() {},
  },
};
</script>
