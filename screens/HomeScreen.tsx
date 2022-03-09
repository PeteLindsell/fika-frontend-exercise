import { StyleSheet, Text, SafeAreaView } from "react-native";

import MovieList from "../components/MovieList";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fika Search</Text>
      <MovieList />
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
});

export default HomeScreen;
