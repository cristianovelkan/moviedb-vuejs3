<template>
  <v-col md="2" sm="3" class="text-center" v-if="title">
    <v-badge
      :content="voteAverage"
      :color="voteAverage < 5 ? 'error' : 'success'"
    >
      <img v-if="image" :src="`${imgUrl}/w500${image}`" height="225" />
      <v-sheet
        v-else
        height="225"
        color="grey"
        class="d-flex align-center px-8 rounded-lg"
      >
        <v-icon color="grey--text">mdi-image-broken-variant</v-icon>
        <p class="grey--text">No image</p>
      </v-sheet>
    </v-badge>
    <h5>{{ title }}</h5>
    <v-chip v-if="type !== 'person'" class="ma-2" color="#032541">
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
    image: {
      type: String,
    },
    type: {
      type: String,
      default: "movie",
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
