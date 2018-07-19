import React from "react"
import { TextInput, View, Text } from "react-native"
import { Container, Header, Content, Form, Item, Input, Label } from "native-base"
import LinearGradient from "react-native-linear-gradient"

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
    }
  }

  render() {
    return (
      <Form>
        <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={{ borderRadius: 4, overflow: "hidden" }}>
          <View style={styles.inputContainer}>
            <View style={styles.label}>
              <Text>姓名</Text>
            </View>
            <TextInput
              style={styles.input}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </View>
        </LinearGradient>
      </Form>
    )
  }
}

const styles = {
  inputContainer: {
    padding:        2,
    flexDirection:  "row",
  },
  input:          {
    flex:            1,
    backgroundColor: "#eee",
    justifyContent: "center",
  },
  label:          {
    width:           60,
    backgroundColor: "#888",
    padding:         5,
    justifyContent: "center",
  },
}

