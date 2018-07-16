import React from "react"
import { View, Text, Button } from "react-native"
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen, get global state: {globalState}</Text>
        <Button
          title={"edit global state"}
          onPress={() => this.editGlobalState("edited")}/>
        <Button
          title="Go to Details test"
          onPress={() => this.props.navigation.navigate("Details")}/>
      </View>
    )
  }

  // event handler
  async editGlobalState(newState) {
    await DataSource.shared.editGlobalState(newState)
    this.fetchGlobalState(DataSource.shared.globalState)
  }
}