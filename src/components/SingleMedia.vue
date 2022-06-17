<template>
  <v-col md="2" sm="3" class="text-center" v-if="title">
    <v-badge
      :content="voteAverage"
      :color="voteAverage < 5 ? 'error' : 'success'"
    >
      <img :src="`${imgUrl}/w500${posterPath}`" height="225" />
    </v-badge>
    <h5>{{ title }}</h5>
    <v-chip class="ma-2" color="#032541">
      <v-icon class="mr-2">mdi-calendar</v-icon>
      {{ releaseDate }}
    </v-chip>
  </v-col>
</template>

<script>
export default {
  name: "SingleMedia",
  props: {
    title: {
      type: String,
    },
    posterPath: {
      type: String,
    },
    releaseDate: {
      type: String,
    },
    voteAverage: {
      type: Number,
    },
  },
  data() {
    return {
      imgUrl: process.env.VUE_APP_TMDB_IMAGES,
    };
  },
};
</script>
<style scoped>
img {
  border-radius: 10px;
}
</style>
