<template>
  <div>
    <v-app id="inspire">
      <v-card flat>
        <v-container fluid>
          <div>
            <v-toolbar>
              <v-btn icon :href="`/room/${rvId}`">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>

              <v-toolbar-title> Add Room/Area </v-toolbar-title>
            </v-toolbar>
          </div>
        </v-container>
      </v-card>
      <br />

      <v-form class="px-3">
        <!-- <v-text-field v-model="data.title" label="Name Of Rv"></v-text-field> -->
        <p class="para-title">Name Of Room/Area</p>
        <v-text-field
          v-model="data.room"
          placeholder="Family Rv"
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

        <v-spacer></v-spacer>
      </v-form>
      <br />
      <!-- <router-link :to="{ name: 'Room' }" tag="v-btn"> -->
      <div class="text-center">
        <v-btn
          @click="createNewRoom"
          style="width: 100px"
          rounded
          color="#ffab01"
          dark
          v-on:keyup.enter="createNewRoom"
        >
          Add Room
        </v-btn>
      </div>

      <br />
      <div class="text-center">
        <v-btn outlined rounded color="#ffab01" dark>
          <v-icon style="padding-right: 5px"> mdi-share </v-icon>
          Share with people
        </v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: " RoomAdd",
  data() {
    return {
      title: "RoomAdd",
      rvId: this.$route.params.rvId,
      data: {},
      newRoom: [],
    };
  },

  methods: {
    async createNewRoom() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/Room/create",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.accesstoken,
        },
        data: {
          name: this.data.room,
          image: this.data.image,

          Rv: this.rvId,
        },
      };

      const newRoomCreated = await axios.request(options);
      this.newRoom = newRoomCreated.data;
      //console.log(newRoomCreated);
      //this.newRoom = newRoomCreated.data;
      //console.log(this.newRoom);
      this.$router.push({
        name: "Room",
        params: { rvId: this.rvId },
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
  margin-right: 50%;
}
/* .v-btn {
  width: 100px;
} */
</style>
