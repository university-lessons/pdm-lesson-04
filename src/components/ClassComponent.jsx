import { Text, View, Button } from "react-native";
import React, { Component } from "react";

/**
 * DON'T USE CLASSES IN REACT!!
 */

export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
        <Text>{this.state.counter}</Text>
        <Button
          onPress={() => {
            this.setState({
              counter: this.state.counter + 1,
            });
          }}
          title="Sell"
        />
      </View>
    );
  }
}
