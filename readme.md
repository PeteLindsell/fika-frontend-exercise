# FikaSearch Exercise

## Getting started

This app is bootstrapped with expo, to get start:

1. Install the dependencies

```sh
yarn
```

2. Start the local development environment

```sh
yarn start
```

3. Follow instruction to start on web, device, emulator

## TODO

1. Extract search to its own component
2. Extract queries to hooks
3. Use auto generated types from endpoint if available
4. Add tests
5. Extracting theming

<img src="docs/screen-shot.png" width="300" >

The objective of this exercise is to fork this repository and create a `react-native` app called 'FikaSearch'. This app will comprise of a listing page of films and the names of their genres. The page should also allow the user to search the films by typing into a text field.

We expect you to have an understandable structure, clean code, and to be able to describe your next steps in any aspects of the challenge you aren't able to complete in a few of hours.

## Technical details

### API

You will need to use the following URLs to fetch the films and genres from `the movie db` API:

movies - [https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false](https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false)

movies search - [https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=searchterm](https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=shrek)

genres - [https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US](https://developers.themoviedb.org/3/genres/get-movie-list)

#### Images

The API will provide part of the image url via the `poster_path` field of each film. It must be combined with the base image path `https://image.tmdb.org/t/p/w500/`

**Have fun!**
