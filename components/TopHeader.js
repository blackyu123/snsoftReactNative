import React from "react"
import { View, Text, Platform } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Button, Icon, Header } from "native-base"


const TopHeader = props => {
  return (
    <View
      style={{
        height:    56,
        marginTop: Platform.OS === "ios" ? 20 : 0,
      }}>
      <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]}>
        <Header>
          <Button>
            <Icon name="apps"/>
          </Button>
          <Button>
            <Icon name="camera"/>
          </Button>
          <Button active>
            <Icon active name="navigate"/>
          </Button>
          <Button>
            <Icon name="person"/>
          </Button>
        </Header>
      </LinearGradient>
    </View>
  )
}

export default TopHeader
