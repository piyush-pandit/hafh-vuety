<template>
  <div>
    <v-card>
      <v-img style="border-radius: 0px 0px 30px 30px" :src="room.image">
        <v-fab-transition>
          <router-link
            :to="{
              name: 'Room',
              params: { rvId: rvId },
            }"
          >
            <v-btn class="btn" style="color: white" top left fixed small light>
              <v-icon dark left> mdi-arrow-left </v-icon> {{ room.name }}
            </v-btn>
          </router-link>
        </v-fab-transition>
      </v-img>
      <v-card-title><strong>Your List</strong></v-card-title>

      <v-btn @click="archiveAll()" outlined rounded color="#ffab01" dark small>
        Archive All
      </v-btn>

      <v-list v-for="post in posts" v-bind:key="post._id">
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
            ></v-img>
          </v-list-item-avatar>

          <div style="margin-left: 10px">
            <v-list-item-title class="text-h6">Chintan Shah </v-list-item-title>
            <v-list-item-subtitle>28/05/2021</v-list-item-subtitle>
          </div>
          <v-spacer />
          <router-link
            :to="{
              name: 'PostEdit',
              params: { rvId: rvId, roomId: roomId, postId: post._id },
            }"
            tag="v-btn"
          >
            <v-btn outlined rounded color="#ffab01" dark small> Edit </v-btn>
          </router-link>
          <v-flex>
            <!-- <DeletePost :post-id="post._id" /> -->
            <DeletePost @dlt="deletePost(post._id)" />
          </v-flex>

          <!-- <v-btn
            @click="deletePost(post._id)"
            outlined
            rounded
            color="#ffab01"
            dark
            small
          >
            Delete
          </v-btn> -->

          <v-btn
            outlined
            rounded
            color="#ffab01"
            dark
            small
            @click="archivePost(post._id)"
          >
            Add to Old
          </v-btn>

          <v-icon>mdi-dots-vertical</v-icon>
        </v-list-item>
        <div>
          <v-img style="border-radius: 20px; margin: 5px" :src="post.image">
          </v-img>
          <p style="margin-right: 60%">{{ post.name }}</p>
          <br />
        </div>
      </v-list>

      <div>
        <v-card-text>
          <router-link
            :to="{
              name: 'PostAdd',
              params: { roomId: roomId, rvId: rvId },
            }"
          >
            <v-fab-transition>
              <v-btn color="#ffab01" dark right fab fixed bottom>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          </router-link>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import DeletePost from "./DeletePost.vue";

export default {
  components: { DeletePost },
  name: "Post",
  data() {
    return {
      title: "Post",
      roomId: this.$route.params.roomId,
      // roomName: this.$route.params.roomName,
      rvId: this.$route.params.rvId,

      posts: [],
      room: {},
    };
  },
  created() {
    this.listOfPosts();
  },
  methods: {
    async getRoomData() {
      const options = {
        method: "GET",
        url: `http://localhost:3000/Room/getById/${this.roomId}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
      };

      const gotRoomdata = await axios.request(options);
      this.room = gotRoomdata.data;
      console.log(this.gotRoomdata);
      // console.log(this.room);
    },
    async listOfPosts() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/Post/search",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          page: 1,
          Room: this.roomId,
        },
      };

      const postList = await axios.request(options);
      this.posts = postList.data.data;
      this.getRoomData();
    },

    async deletePost(postId) {
      console.log("delete");
      var options = {
        method: "DELETE",
        url: "http://localhost:3000/Post/delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: { _id: postId },
      };

      await axios.request(options);
      this.listOfPosts();
    },
    async archivePost(postId) {
      var options = {
        method: "POST",
        url: "http://localhost:3000/Post/archive",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: { _id: postId },
      };

      await axios.request(options);
      this.listOfPosts();
    },
    async archiveAll() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/Post/archiveAll",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: { Room: this.roomId },
      };

      await axios.request(options);
      this.listOfPosts();
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

.btn {
  width: 120px;
  margin: 10px 0px 0px -30px;
  text-transform: capitalize;
  background: linear-gradient(to right, #1e1f1f 63%, #f6eef1 98%);
}
</style>
