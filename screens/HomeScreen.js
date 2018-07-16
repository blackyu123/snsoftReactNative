import React from "react"
import { View, Text, Button, Image, ScrollView } from "react-native"
import DataSource from "../data/DataSource"

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      globalState: null,
    }
  }

  fetchGlobalState(props) {
    this.setState({
      globalState: props,
    })
  }

  componentDidMount() {
    this.fetchGlobalState(DataSource.shared.globalState)
  }

  render() {
    const { globalState } = this.state

    return (
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "58%", paddingRight: 10 }}>
            <Image
              resizeMode={"cover"}
              style={{ height: 270 }}
              source={{ uri: "https://www.eu88888.com/static/img/hotGame.7392825.jpg" }}/>
          </View>

          <View style={{ width: "42%" }}>
            <Image
              resizeMode={"cover"}
              style={{ flex: 2, marginBottom: 10 }}
              source={{ uri: "https://www.eu88888.com/static/img/lotteryPoolGame.0dcad26.jpg" }}/>
            <Image
              resizeMode={"cover"}
              style={{ flex: 1 }}
              source={{ uri: "https://www.eu88888.com/static/img/newGame.bdd288e.jpg" }}/>
          </View>
        </View>

        <Text>Global aate: {globalState}, </Text>
        <Button
          title={"edit global state"}
          onPress={() => this.editGlobalState("edited")}/>
        <Button
          title="Go to Details test"
          onPress={() => this.props.navigation.navigate("Details")}/>
      </ScrollView>
    )
  }

  // event handler
  async editGlobalState(newState) {
    await DataSource.shared.editGlobalState(newState)
    this.fetchGlobalState(DataSource.shared.globalState)
  }
}