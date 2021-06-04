<template>
  <div>
    <v-card>
      <v-img
        style="border-radius: 0px 0px 30px 30px"
        src="https://sc02.alicdn.com/kf/H14b210d2f37942ea86a6ef2fc81cdc61Y/226479103/H14b210d2f37942ea86a6ef2fc81cdc61Y.png"
      >
        <!-- <v-card-title><v-icon>mdi-arrow-left</v-icon>Kitchen</v-card-title> -->
      </v-img>
      <v-card-title><strong>Your List</strong></v-card-title>

      <v-list-item>
        <v-list-item-avatar>
          <v-img
            src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
          ></v-img>
        </v-list-item-avatar>

        <div style="margin-left: 10px">
          <v-list-item-title class="text-h6">Chintan Shah</v-list-item-title>
          <v-list-item-subtitle>28/05/2021</v-list-item-subtitle>
        </div>
        <v-spacer />
        <v-btn outlined rounded color="#ffab01" dark small> Add to Old </v-btn>
      </v-list-item>

      <div>
        <v-img
          style="border-radius: 20px; margin: 5px"
          src="https://learn.compactappliance.com/wp-content/uploads/2017/12/steamed-broccoli.jpg"
        >
        </v-img>
        <p style="margin-right: 60%">Buy Broccoli</p>
        <br />
        <p class="line"><span>Old</span></p>
      </div>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img
              src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
            ></v-img>
          </v-list-item-avatar>

          <div style="margin-left: 10px">
            <v-list-item-title class="text-h6">Chintan Shah</v-list-item-title>
            <v-list-item-subtitle>28/05/2021</v-list-item-subtitle>
          </div>
        </v-list-item>

        <div>
          <v-img
            style="border-radius: 20px; margin: 5px"
            src="http://images2.fanpop.com/images/photos/5400000/Random-Food-random-5409310-1280-800.jpg"
          >
          </v-img>
        </div>
      </v-list>

      <div>
        <v-card-text>
          <v-fab-transition>
            <v-btn color="#ffab01" dark right fab fixed bottom href="/postAdd">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-fab-transition>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Post",
  data() {
    return {
      title: "Post",
      roomId: this.$route.params.roomId,
      posts: [],
    };
  },
  created() {
    this.listOfPosts();
  },
  methods: {
    async listOfPosts() {
      const options = {
        method: "POST",
        url: "http://localhost:3000/Post/search",
        headers: { "Content-Type": "application/json" },
        data: {
          creator: "507f1f77bcf86cd799439014",
          page: 1,
          Room: "60b9b56a47382d0582ca1906",
        },
      };

      const postList = await axios.request(options);
      this.posts = postList.data.data;
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
</style>
