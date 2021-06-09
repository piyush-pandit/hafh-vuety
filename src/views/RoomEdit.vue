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
          <v-file-input
            label="Add an Image"
            @change="uploadImage(roomData.image)"
            type="file"
            v-model="roomData.image"
            placeholder="Browse file"
            solo-inverted
            prepend-icon="mdi-camera"
            style="margin: 0px 15px 0px 15px"
          >
          </v-file-input>
          <!-- <v-text-field
            v-model="roomData.image"
            label="New image"
            prepend-icon="mdi-camera"
          ></v-text-field> -->

          <v-spacer></v-spacer>

          <v-btn
            @click="updateRoom"
            class="success mx-0 mt-3"
            v-on:keyup.enter="updateRoom"
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
      this.roomData.image = data.image;

      console.log("uploaded image =", this.rvData.image);
    },
  },
};
</script>
