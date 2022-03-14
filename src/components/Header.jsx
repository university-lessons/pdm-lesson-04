import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ title, user, version }) {
  return (
    <View style={styles.container}>
      <Text> {user} </Text>
      <Text> {title} </Text>
      <Text> {version} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 48,
  },
});
