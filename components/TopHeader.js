import React from "react"
import { View, Text, Platform, Image } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Button, Icon, Header } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import SupportImage from "../assets/menu/support.png"
import MessageImage from "../assets/menu/message.png"
import RegisterImage from "../assets/menu/register.png"
import LoginImage from "../assets/menu/login.png"

const buttonStyle = {
  padding: 10,
  flex:    1,
}

const iconStyle = {
  color:     "#fff",
  textAlign: "center",
}

const menuItemStyle = {
  width:  "100%",
  height: 40,
}

const TopHeader = props => {
  return (
    <View
      style={{
        height:    56,
        marginTop: Platform.OS === "ios" ? 20 : 0,
      }}>
      <LinearGradient colors={["#1c212f", "#1b1513"]}>
        <View style={{ flexDirection: "row" }}>
          <View style={buttonStyle}>
            <Image source={SupportImage} style={menuItemStyle} resizeMode={"contain"}/>
          </View>
          <View style={buttonStyle}>
            <Image source={MessageImage} style={menuItemStyle} resizeMode={"contain"}/>
          </View>
          <View style={buttonStyle}>
            <Image source={RegisterImage} style={menuItemStyle} resizeMode={"contain"}/>
          </View>
          <View style={buttonStyle}>
            <Image source={LoginImage} style={menuItemStyle} resizeMode={"contain"}/>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default TopHeader
