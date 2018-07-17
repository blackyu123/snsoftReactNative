import React from "react"
import { View, Text, Button, Image, ScrollView } from "react-native"
import DataSource from "../data/DataSource"
import HotGame from "../assets/hotgame.jpg"
import Lottery from "../assets/lottery.jpg"
import LatestGame from "../assets/newgame.jpg"

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
        <View style={{ flexDirection: "row", height: 300 }}>
          <View style={{ width: "58%", paddingRight: 10 }}>
            <Image
              resizeMode={"stretch"}
              style={{ flex: 1, width: "100%" }}
              source={HotGame}/>
          </View>

          <View style={{ width: "42%" }}>
            <Image
              resizeMode={"stretch"}
              style={{ flex: 2, marginBottom: 10, width: "100%" }}
              source={Lottery}/>
            <Image
              resizeMode={"stretch"}
              style={{ flex: 1, width: "100%" }}
              source={LatestGame}/>
          </View>
        </View>

        <Text>Global aaaaaate: {globalState}, </Text>
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