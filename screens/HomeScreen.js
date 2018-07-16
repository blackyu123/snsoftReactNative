import React from "react"
import { View, Text, Button } from "react-native"
import DataSource from "../data/DataSource"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen, get global state: {DataSource.shared.globalState}</Text>
        <Button
          title="Go to Details test"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    )
  }
}