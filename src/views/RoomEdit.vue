<template>
  <div>
    <v-card flat>
      <v-container fluid>
        <div>
          <v-toolbar>
            <v-btn icon :href="`/room/${rvId}`">
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
            v-model="roomData.name"
            label="Name Of Room"
          ></v-text-field>
          <v-text-field
            v-model="roomData.image"
            label="New image"
            prepend-icon="mdi-camera"
          ></v-text-field>

          <v-spacer></v-spacer>

          <v-btn @click="updateRoom" class="success mx-0 mt-3"
            >Update Room</v-btn
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
  name: "RoomEdit",
  data() {
    return {
      title: "RoomEdit",
      roomId: this.$route.params.roomId,
      rvId: this.$route.params.rvId,
      //data: {},
      roomData: {},
    };
  },

  async created() {
    //  if (this.$route.params.rvId) {
    this.getRoomData();
    //  }
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
      this.roomData = gotRoomdata.data;
      //console.log(this.roomId);
    },
    async updateRoom() {
      console.log("update room");
      const options = {
        method: "PUT",
        url: "http://localhost:3000/Room/update",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          _id: this.roomData._id,
          name: this.roomData.name,
          image: this.roomData.image,
        },
      };

      const updateRoom = await axios.request(options);
      console.log(updateRoom);
      this.$router.push({
        name: "Room",
        params: { rvId: this.rvId },
      });
    },
  },
};
</script>
