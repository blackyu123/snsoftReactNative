import React, { Component } from "react"
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  FlatList,
  Image,
} from "react-native"

const  SLACK_TOKEN =  process.env.SLACK_TOKEN

const SLACK_TOKEN_EXCHANGE_URL = `https://slack.com/api/rtm.connect?token=${SLACK_TOKEN}`
const SLACK_CHANNEL_HISTORY_URL = `https://slack.com/api/channels.history?token=${SLACK_TOKEN}&channel=CBN72QRDL&count=50`
const REQUEST_METHOD = {
  method:  "GET",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
}

export default class ChatPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      typing:   "",
      messages: [],
    }
    this.chatID = 1
  }

  async componentWillMount() {
    await this.initWebSocket()
    await this.fetchChannelChatHistory()
  }

  async initWebSocket() {
    const promise = await fetch(SLACK_TOKEN_EXCHANGE_URL, REQUEST_METHOD)
    const response = await promise.json()

    if (response.url) {
      this.socket = new WebSocket(response.url)
      this.socket.onopen = () => {
        this.setState({ connected: true })
      }
      this.socket.onmessage = (event) => {
        const dataParse = JSON.parse(event.data)
        if (dataParse.ok === true) {
          //this.handleMessageUpdate(dataParse)
        }
      }
      this.socket.onclose = () => {
        this.setState({ connected: false })
      }
    }
  }

  async fetchChannelChatHistory() {
    try {
      const promise = await fetch(SLACK_CHANNEL_HISTORY_URL, REQUEST_METHOD)
      const response = await promise.json()

      this.setState({
        messages:  response.messages,
        has_more:  response.has_more,
        isLoading: false,
      })
    } catch (err) {
      console.log(err)
      this.setState({
        isLoading: false,
      })
    }
  }

  sendMessage = async () => {
    // read message from component state
    const message = this.state.typing

    this.chatID = this.chatID + 1
    this.socket.send(JSON.stringify({
      "id":      this.chatID,
      "type":    "message",
      "channel": "CBN72QRDL",
      "text":    message,
    }))
    await this.handleMessageUpdate(message)
    // set the component state (clears text input)
    this.setState({
      typing: "",
    })
  }



  handleMessageUpdate(entry) {
    const messages = this.state.messages
    messages.unshift(entry)
    this.setState({
      messages,
    })
  }

  renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Image style={styles.avatar}
               source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-afx1H8pcNbGNcVGugr5mzqJS2i2oYovCBEeYIa2eCxoCYr3N" }}/>
        <View style={styles.rowText}>
          <Text style={styles.sender}>Yuho</Text>
          <Text style={styles.message}>{item.text}</Text>
        </View>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <StatusBar backgroundColor="lightseagreen" barStyle="light-content"/>
          <Text style={styles.title}>
            # HAHA
          </Text>
        </View>
        <FlatList
          inverted
          data={this.state.messages}
          keyExtractor={(item, index) => {
            return (
              item.tx
            )
          }}
          renderItem={this.renderItem}
        />

        <KeyboardAvoidingView>
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type something nice"
              onChangeText={text => this.setState({ typing: text })}
            />
            <TouchableOpacity onPress={this.sendMessage}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header:    {
    height:          50,
    backgroundColor: "lightseagreen",
    alignItems:      "center",
    justifyContent:  "flex-end",
    padding:         10,
  },
  title:     {
    color:      "white",
    fontWeight: "bold",
    fontSize:   24,
  },
  container: {
    flex:            1,
    backgroundColor: "#fff",
  },
  row:       {
    flexDirection:     "row",
    padding:           20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar:    {
    borderRadius: 20,
    width:        40,
    height:       40,
    marginRight:  10,
  },
  rowText:   {
    flex: 1,
  },
  message:   {
    fontSize: 18,
  },
  sender:    {
    fontWeight:   "bold",
    paddingRight: 10,
  },
  footer:    {
    flexDirection:   "row",
    backgroundColor: "#eee",
  },
  input:     {
    paddingHorizontal: 20,
    fontSize:          18,
    flex:              1,
  },
  send:      {
    alignSelf:  "center",
    color:      "lightseagreen",
    fontSize:   16,
    fontWeight: "bold",
    padding:    20,
  },
})
