import React from "react"
import Routes from "./routes/Routes"
import { StatusBar, View, YellowBox, Image } from "react-native"
import BgImage from "../assets/bg/casino.jpg"

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Method `jumpToIndex` is deprecated",
  "TabBarBottom is deprecated",
])

const App = () => (
  <View style={{ flex: 1, backgroundColor: "#0b1829" }}>
    <Image source={BgImage}
           style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0, width: "100%" }}
           resizeMode={"stretch"}/>
    <Routes/>
  </View>
)

export default App
