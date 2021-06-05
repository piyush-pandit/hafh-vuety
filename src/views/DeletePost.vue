<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          utlined
          rounded
          small
          color="#ffab01"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Delete
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5">
          Do you want to Delete this Post?
        </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">
            Cancel
          </v-btn>
          <v-btn color="green darken-1" text @click="deletePost()">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
//import axios from "axios";
export default {
  props: ["postId"],
  //   props: {
  //     method: { type: Function },
  //   },

  data() {
    return {
      dialog: false,
    };
  },
  //   mounted() {
  //     this.method();
  //   },

  methods: {
    // async deletePost(postId) {
    //   console.log("delete");
    //   var options = {
    //     method: "DELETE",
    //     url: "http://localhost:3000/Post/delete",
    //     headers: { "Content-Type": "application/json" },
    //     data: { _id: postId },
    //   };
    //   await axios.request(options);
    //   this.listOfPosts();
    //   console.log(postId);
    // },
    deletePost() {
      this.$emit("dlt");
    },
  },
};
</script>
