import React from "react";
import { View, FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import MovieItem from "./MovieItem";

const MOVIES = [
  {
    adult: false,
    backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 5083.954,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8.3,
    vote_count: 8940,
  },
];

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

const MovieList = () => {
  const renderItem = ({ item }: ListRenderItemInfo<Movie>) => (
    <MovieItem
      title={item.original_title}
      imageUri={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={MOVIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 32,
  },
});

export default MovieList;
