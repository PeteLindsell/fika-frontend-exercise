import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

interface MovieItemProps {
  title: string;
  imageUri: string;
}

const MovieItem = ({ title, imageUri }: MovieItemProps) => (
  <View style={styles.item}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
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
    borderRadius: 4,
  },
  container: {
    padding: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 22,
    color: "#fff",
  },
  body: {
    fontSize: 14,
    color: "#fff",
    backgroundColor: "#333",
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default MovieItem;
