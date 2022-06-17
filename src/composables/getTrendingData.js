import { ref } from "vue";

const getTrendingData = () => {
  const items = ref([]);
  const error = ref(null);

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
    mode: "cors",
  };

  const load = async (page = 1, mediaType = "all", timeWindow = "week") => {
    const url = `${process.env.VUE_APP_TMDB_ENDPOINT}/trending/${mediaType}/${timeWindow}?api_key=${process.env.VUE_APP_TMDB_APIKEY}&page=${page}`;
    try {
      let data = await fetch(url, options);

      if (!data.ok) {
        throw new Error(data.statusText);
      }

      items.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(error);
    }
  };

  return { items, error, load };
};

export default getTrendingData;
