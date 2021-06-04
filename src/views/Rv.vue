<template>
  <div>
    <v-card class="mx-auto" max-width="100%">
      <v-img
        class="main"
        height="200px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ492AnNAAPJR3tuNh9iojWzyaVnyeQ3mApIw&usqp=CAU"
      >
        <!-- <v-fab-transition>
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
        </v-fab-transition></v-img -->
      >

      <v-card-title> Your Rv's</v-card-title>

      <v-list>
        <v-list-item v-for="Rv in totalRvs" v-bind:key="Rv._id">
          <v-list-item-avatar size="40px">
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
              <v-list-item-title style="text-align: left; margin-left: 5px"
                ><strong>{{ Rv.name }}</strong>
              </v-list-item-title>
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
  </div>
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
