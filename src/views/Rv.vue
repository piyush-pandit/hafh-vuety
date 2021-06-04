<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ492AnNAAPJR3tuNh9iojWzyaVnyeQ3mApIw&usqp=CAU"
    ></v-img>

    <v-card-title> Your Rv's</v-card-title>

    <v-list>
      <v-list-item v-for="Rv in totalRvs" v-bind:key="Rv._id">
        <v-list-item-avatar size="56px">
          <img
            alt="Avatar"
            src="https://st.depositphotos.com/1203257/1763/i/950/depositphotos_17637335-stock-photo-yellowstone-rv-trip.jpg"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <router-link
            :to="{ name: 'Room', params: { rvId: Rv._id } }"
            tag="v-btn"
          >
            <v-list-item-title>{{ Rv.name }} </v-list-item-title>
          </router-link>
        </v-list-item-content>

        <router-link
          :to="{ name: 'RvEdit', params: { rvId: Rv._id } }"
          tag="v-btn"
        >
          <v-btn class="mx-2" fab dark small color="cyan">
            <v-icon dark> mdi-pencil </v-icon>
          </v-btn>
        </router-link>

        <v-btn
          @click="deleteRv(Rv._id)"
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
      <v-fab-transition>
        <v-btn color="#ffab01" dark right fab fixed bottom href="/rvAdd">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <!-- <h6>New Area</h6> -->
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      totalRvs: [],
      pageCount: [],
    };
  },
  created() {
    this.listOfRvs();
  },
  methods: {
    async listOfRvs() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/Rv/search",
        headers: { "Content-Type": "application/json" },
        data: { creator: "507f1f77bcf86cd799439014", page: 1 },
      };
      const data = await axios.request(options);

      this.totalRvs = data.data.data;
      this.pageCount = data.data;
      this.maxPage = this.pageCount.maxPage;
    },

    async deleteRv(rvId) {
      const options = {
        method: "DELETE",
        url: "http://localhost:3000/RV/delete",
        headers: { "Content-Type": "application/json" },
        data: { _id: rvId },
      };

      await axios.request(options);

      this.listOfRvs();
    },
  },
};
</script>
