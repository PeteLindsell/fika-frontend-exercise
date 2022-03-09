import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

interface MovieItemProps {
  tags: string[];
}

const Tags = ({ tags }: MovieItemProps) => (
  <View style={styles.tags}>
    {tags.map((tag) => (
      <Text style={styles.tag}>{tag}</Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  tags: {
    flexDirection: "row",
    alignItems: "flex-start",
    margin: -5,
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#3CC262",
    padding: 5,
    margin: 5,
  },
});

export default Tags;
