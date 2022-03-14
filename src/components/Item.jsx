import { View, Text, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

export default function Item({ name, description, price }) {
  // just a string conversion
  const priceStr = "R$ " + price.toFixed(2);

  // hook useState (create a persistent state)
  const [counter, setCounter] = useState(0);

  // button callback
  const handleSell = () => {
    setCounter(counter + 1);
  };

  return (
    <View>
      <Text style={styles.title}>{name}</Text>
      <Text>{description}</Text>
      <Text>{priceStr}</Text>
      <Text>Sales:{counter}</Text>

      <Button onPress={handleSell} title="Sell" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 8,
  },
});
