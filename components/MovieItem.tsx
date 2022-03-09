import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Tags from "./Tags";

export interface MovieItemProps {
  genres: string[];
  title: string;
  imageUri: string;
  id: string;
}

const MovieItem = ({ title, imageUri, genres }: MovieItemProps) => (
  <View style={styles.item}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Tags tags={genres} />
    </View>
    <Image style={styles.image} source={{ uri: imageUri }} />
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#222",
    margin: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: 5,
  },
  container: {
    padding: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default MovieItem;
