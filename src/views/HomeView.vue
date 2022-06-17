<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="items.results && items.results.length">
      <ul>
        <template v-for="(item, i) in items.results">
          <li v-if="item.title" :key="i">
            {{ item.title }}
          </li>
        </template>
      </ul>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import getTrendingData from "@/composables/getTrendingData";

export default {
  name: "HomeView",
  components: {},
  setup() {
    const { items, error, load } = getTrendingData();

    load();

    return { items, error };
  },
};
</script>
