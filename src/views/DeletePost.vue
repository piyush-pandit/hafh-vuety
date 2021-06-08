<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
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
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
            v-on:keyup.enter="dialog = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="deletePost()"
            v-on:keyup.enter="deletePost()"
          >
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
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    deletePost() {
      this.$emit("dlt");
    },
  },
};
</script>
