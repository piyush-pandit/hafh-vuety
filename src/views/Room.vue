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
        <template v-for="item in items">
          <v-list-item :key="item.title">
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>

      <v-icon>
        <span class="material-icons">add_circle</span>
      </v-icon>
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
          Rv: "60a27186c189465f8d33814b",
        },
      };

      axios.request(options);
    },
  },
};
</script>

<style scoped>
.main {
  border-radius: 0px 0px 20px 20px;
}
</style>
