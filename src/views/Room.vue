<template>
  <div>
    <v-card class="mx-auto" max-width="100%">
      <v-img
        class="main"
        height="200px"
        src="http://d2u4q3iydaupsp.cloudfront.net/M9YO50StNO9wcaIKVYLMIAVeaOrWxAHoEXoIO0K1D9hMa6RlXDkuExDgDwGnn1NTP70WO5k6SoYUhqA2jEzvSp5Fj0jmHNjAWq11rOt0OA59j6pLWSEK6jEWMrGxtiG2"
      >
        <v-fab-transition>
          <v-btn
            class="btn"
            style="color: white"
            top
            left
            fixed
            small
            light
            href="/rv"
          >
            <v-icon dark left> mdi-arrow-left </v-icon> My Rv
          </v-btn>
        </v-fab-transition>
      </v-img>

      <v-list style="padding-top: 30px">
        <!-- <template v-for="room in rooms">
          <v-list-item :key="room._id">
            <v-list-item-avatar>
              <v-img
                :
                src="https://st.depositphotos.com/1203257/1763/i/950/depositphotos_17637335-stock-photo-yellowstone-rv-trip.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content style="text-align: left; margin-left: 15px">
              <strong
                ><router-link
                  :to="{ name: 'Post', params: { roomId: room._id } }"
                  tag="v-btn"
                >
                  <v-list-item-title style="text-align: left; margin-left: 5px"
                    >{{ room.name }}
                  </v-list-item-title>
                </router-link>
                ></strong
              >
            </v-list-item-content>
            <router-link
              :to="{
                name: 'RoomEdit',
                params: { roomId: room._id, rvId: rvId },
              }"
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
        </template> -->

        <v-list-item v-for="room in rooms" v-bind:key="room._id">
          <v-list-item-avatar size="40px">
            <img
              alt="Avatar"
              src="https://st.depositphotos.com/1203257/1763/i/950/depositphotos_17637335-stock-photo-yellowstone-rv-trip.jpg"
            />
          </v-list-item-avatar>

          <v-list-item-content>
            <router-link
              :to="{ name: 'Post', params: { roomId: room._id } }"
              tag="v-btn"
            >
              <v-list-item-title style="text-align: left; margin-left: 5px"
                ><strong>{{ room.name }}</strong>
              </v-list-item-title>
            </router-link>
          </v-list-item-content>
          <router-link
            :to="{ name: 'RoomEdit', params: { roomId: room._id, rvId: rvId } }"
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
    async deleteRoom(roomId) {
      var options = {
        method: "DELETE",
        url: "http://localhost:3000/Room/delete",
        headers: { "Content-Type": "application/json" },
        data: { _id: roomId },
      };

      await axios.request(options);
      this.listOfRooms();
    },
  },
};
</script>

<style scoped>
.main {
  border-radius: 0px 0px 20px 20px;
}

a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

a:active {
  color: green;
  background-color: transparent;
}

.btn {
  width: 120px;
  margin: 10px 0px 0px -30px;
  text-transform: capitalize;
  background: linear-gradient(to right, #1e1f1f 63%, #f6eef1 98%);
}
</style>
