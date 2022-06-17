<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="12">
        <v-img
          :src="require('./../assets/7VrRna8S3x6xbijooeBmxqvHXiu.jpg')"
          class="align-center d-flex justify-start"
        >
          <h1 class="pl-8">Bem-Vindo(a).</h1>
          <p class="pl-8">
            Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.
          </p>
        </v-img>
      </v-col>
      <v-col cols="12">
        <div v-if="error">{{ error }}</div>

        <v-row v-if="items.results && items.results.length" justify="center">
          <v-col cols="12">
            <h3>Trending</h3>
            <v-chip-group
              v-model="mediaType"
              active-class="deep-purple--text text--accent-4"
              mandatory
            >
              <v-chip value="all">All</v-chip>
              <v-chip value="movie">Movies</v-chip>
              <v-chip value="tv">TV Shows</v-chip>
              <v-chip value="person">People</v-chip>
            </v-chip-group>
          </v-col>

          <template v-for="(item, i) in items.results">
            <single-media
              v-if="item.title || item.name"
              :key="i"
              :image="item.poster_path || item.profile_path"
              :title="item.title || item.name"
              :releaseDate="item.release_date || item.first_air_date"
              :voteAverage="item.vote_average"
              :type="item.media_type"
            />
          </template>
          <v-col cols="12">
            <v-pagination
              v-model="items.page"
              :length="items.total_pages"
              @update:modelValue="toPage"
            ></v-pagination>
          </v-col>
        </v-row>
        <div v-else>
          <p>Loading...</p>
        </div>
      </v-col>
    </v-row>
    <v-overlay v-model="loading"></v-overlay>
  </v-container>
</template>

<script>
import getTrendingData from "@/composables/getTrendingData";
import SingleMedia from "@/components/SingleMedia.vue";
import { ref, watch } from "vue";

export default {
  name: "HomeView",
  components: { SingleMedia },

  setup() {
    const mediaType = ref("all");
    const loading = ref(true);
    const { items, error, load } = getTrendingData();

    load();

    const toPage = (page, mediaType) => {
      loading.value = true;
      load(page, mediaType);
    };

    watch(mediaType, (newValue) => {
      loading.value = true;
      load(1, newValue);
    });

    watch(items, () => {
      window.scrollTo(0, 0);
      loading.value = false;
    });

    return { loading, mediaType, items, error, toPage };
  },
};
</script>
<style scoped>
h1,
p {
  color: #fff;
}
</style>
