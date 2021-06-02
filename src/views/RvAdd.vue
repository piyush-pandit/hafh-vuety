<template>
  <div>
    <v-input
      type="text"
      placeholder="Family Rv"
      class="bg-custom"
      name="name"
      v-model="rvData.name"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      rvData: { name: "", image: "" },
    };
  },
};
</script>
