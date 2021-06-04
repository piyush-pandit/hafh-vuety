<template>
  <div>
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="main"
        height="200px"
        src="http://d2u4q3iydaupsp.cloudfront.net/M9YO50StNO9wcaIKVYLMIAVeaOrWxAHoEXoIO0K1D9hMa6RlXDkuExDgDwGnn1NTP70WO5k6SoYUhqA2jEzvSp5Fj0jmHNjAWq11rOt0OA59j6pLWSEK6jEWMrGxtiG2"
      >
        <v-card-title>My Rv</v-card-title>
      </v-img>

      <v-list>
        <v-list-item v-for="room in rooms" v-bind:key="room._id">
          <v-list-item-avatar size="56px">
            <img
              alt="Avatar"
              src="https://st.depositphotos.com/1203257/1763/i/950/depositphotos_17637335-stock-photo-yellowstone-rv-trip.jpg"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ room.name }} </v-list-item-title>
          </v-list-item-content>
          <router-link
          :to="{ name: 'RoomEdit', params: { roomId: room._id } }"
          tag="v-btn"
        >
          <v-btn class="mx-2" fab dark small color="cyan">
            <v-icon dark> mdi-pencil </v-icon>
          </v-btn>
        </router-link>

        <v-btn
          @click="deleteRoom(room._id)"
          class="mx-2"
          fab
          dark
          small
          color="cyan"
        >
          <v-icon dark> mdi-delete </v-icon>
        </v-btn>
        </v-list-item>
      </v-list>
      <v-card-text>
        <router-link :to="{ name: 'RoomAdd', params: { rvId: rvId } }">
          <v-fab-transition>
            <v-btn color="#ffab01" dark right fab fixed bottom>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </router-link>
        <!-- <h6>New Area</h6> -->
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Room",
  data() {
    return {
      title: "Room",
      rvId: this.$route.params.rvId,
      data: {},
      rooms: [],
    };
  },

  created() {
    this.listOfRooms();
  },

  
  methods: {
    async listOfRooms() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/Room/search",
        headers: { "Content-Type": "application/json" },
        data: {
          creator: "507f1f77bcf86cd799439014",
          page: 1,
          Rv: this.rvId,
        },
      };

      const roomsList = await axios.request(options);
      this.rooms = roomsList.data.data;
      console.log(roomsList);
    },
    async deleteRoom(){
      var options = {
  method: 'DELETE',
  url: 'http://localhost:3000/Room/delete',
  headers: {'Content-Type': 'application/json'},
  data: {_id: '60b9bd677b9d8608bd9eda48'}
};

axios.request(options)
    },
  },
};
</script>

<style scoped>
.main {
  border-radius: 0px 0px 20px 20px;
}
</style>
