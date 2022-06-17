<template>
  <div class="about">
    <h1># vuejs-challenge</h1>
    <p>Coding challenge for evaluating VueJS candidates at Hypery</p>

    <h3>## Description</h3>
    <p>
      You should develop a project using VueJS to read an [external
      API](https://developers.themoviedb.org/3/trending/get-trending) and render
      the movies that are trending on the day or week, you should have the
      option to select daily or weekly.
    </p>

    <h3>## Tasks</h3>
    <ul>
      <li>[ ] Config a single route in your app, like /trending;</li>
      <li>
        [ ] You must show the movie's image, title, release date (dd/mm/yyyy)
        and average vote;
      </li>
      <li>
        [ ] Feel free to choose from grid, list, carousel, or whatever display
        style you like best for displaying the movies.
      </li>
      <li>[ ] Create a repository and send us the link</li>
    </ul>

    <h3>## Requirements</h3>
    <ul>
      <li>[ ] Vue 3</li>
    </ul>

    <h3>## Not required but very much appreciated</h3>
    <ul>
      <li>[ ] Live demo (netlify, vercel, etc)</li>
      <li>[ ] Components library (vuetify, tailwind, etc)</li>
    </ul>

    <h3>### Tips</h3>
    <ul>
      <li>
        Use [The Movie DB API
        v3](https://developers.themoviedb.org/3/trending/get-trending)
      </li>
      <li>
        To get a valid token go to [your
        panel](https://www.themoviedb.org/settings/api) Settings -> API -> API
        Key (v3 Auth)
      </li>
      <li>You'll use the request below to get the trending movies:</li>
    </ul>
  </div>
</template>
<style>
.about {
  width: 60vw;
  padding: 20px;
  margin: 0 auto;
  text-align: left;
}
</style>
