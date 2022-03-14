import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Item from "../components/Item";
import ClassComponent from "../components/ClassComponent";

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header title="PDM Food" user="Fulano" version={1.2} />

      <Item
        name="Pizza"
        description="Pizza de queijo com oregano e molho especial"
        price={29.9}
      />

      <Item
        name="Hamburguer"
        description="Hamburger de queijo com oregano e molho especial"
        price={12.9}
      />

      <Item
        name="Hot-Dog"
        description="Hot-dog de queijo com oregano e molho especial"
        price={15}
      />

      <Item
        name="Pizza"
        description="Pizza de queijo com oregano e molho especial"
        price={29.9}
      />

      <Item
        name="Hamburguer"
        description="Hamburger de queijo com oregano e molho especial"
        price={12.9}
      />

      <Item
        name="Hot-Dog"
        description="Hot-dog de queijo com oregano e molho especial"
        price={15}
      />

      <Item
        name="Pizza"
        description="Pizza de queijo com oregano e molho especial"
        price={29.9}
      />

      <Item
        name="Hamburguer"
        description="Hamburger de queijo com oregano e molho especial"
        price={12.9}
      />

      <Item
        name="Hot-Dog"
        description="Hot-dog de queijo com oregano e molho especial"
        price={15}
      />

      <ClassComponent title="Class Title" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    marginTop: 24,
  },
});
