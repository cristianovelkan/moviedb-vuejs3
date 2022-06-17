# vuejs-challenge
Coding challenge for evaluating VueJS candidates at Hypery

## Description
You should develop a project using VueJS to read an [external API](https://developers.themoviedb.org/3/trending/get-trending) and render the movies that are trending on the day or week, you should have the option to select daily or weekly.

## Tasks
 - [ ] Config a single route in your app, like /trending;
 - [ ] You must show the movie's image, title, release date (dd/mm/yyyy) and average vote;
 - [ ] Feel free to choose from grid, list, carousel, or whatever display style you like best for displaying the movies.
 - [ ] Create a repository and send us the link

## Requirements
 - [ ] Vue 3

## Not required but very much appreciated
 - [ ] Live demo (netlify, vercel, etc)
 - [ ] Components library (vuetify, tailwind, etc)

### Tips
- Use [The Movie DB API v3](https://developers.themoviedb.org/3/trending/get-trending)
- To get a valid token go to [your panel](https://www.themoviedb.org/settings/api) Settings -> API -> API Key (v3 Auth)
- You'll use the request below to get the trending movies:
```
 GET https://api.themoviedb.org/3/trending/movie/{week/day}?api_key={YOUR_API_KEY}
```