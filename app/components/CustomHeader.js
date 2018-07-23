import React from "react"
import { Header } from "react-navigation"
import { View, Platform } from "react-native"
import LinearGradient from "react-native-linear-gradient"


const CustomHeader = props => {
  console.log(props.navigation.state.routes)
  return (
    <View
      style={{
        height:    56,
        marginTop: Platform.OS == "ios" ? 20 : 0,
      }}>
      <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']}>
        <Header {...props} />
      </LinearGradient>
    </View>
  )
}


export default CustomHeader
