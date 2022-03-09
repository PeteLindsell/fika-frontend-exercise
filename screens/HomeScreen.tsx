import React, { useState } from "react";
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import useSWR from "swr";

import MovieList from "../components/MovieList";

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Movies {
  results: Movie[];
}

interface Genre {
  id: number;
  name: string;
}

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: movies, error: moviesError } = useSWR<Movies>(
    query
      ? `https://api.themoviedb.org/3/search/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false&query=${query}`
      : "https://api.themoviedb.org/3/discover/movie?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1&include_adult=false",
    fetcher
  );

  const { data: genres, error: genresError } = useSWR(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US",
    fetcher
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fika Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
      />
      {!movies || !genres ? (
        <ActivityIndicator />
      ) : (
        <MovieList
          movies={movies.results.map((movie) => ({
            id: movie.id.toString(),
            title: movie.original_title,
            genres: movie.genre_ids.map(
              (genreId) =>
                genres.genres.find((genre: Genre) => genre.id === genreId).name
            ),
            imageUri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          }))}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: "#3CC262",
  },
  input: {
    fontSize: 18,
    color: "#eee",
    textAlign: "left",
    alignSelf: "stretch",
    backgroundColor: "#222",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default HomeScreen;
