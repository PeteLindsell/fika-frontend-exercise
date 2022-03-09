import React from "react";
import { View, FlatList, ListRenderItemInfo, StyleSheet } from "react-native";

import MovieItem, { MovieItemProps } from "./MovieItem";

interface MovieListProps {
  movies: MovieItemProps[];
}

const MovieList = ({ movies }: MovieListProps) => {
  const renderItem = ({ item }: ListRenderItemInfo<MovieItemProps>) => (
    <MovieItem
      id={item.id}
      title={item.title}
      imageUri={item.imageUri}
      genres={item.genres}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
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
