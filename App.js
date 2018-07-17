import React from "react"
import Routes from "./routes/Routes"
import { StatusBar, View, YellowBox } from "react-native"

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader",
  "Method `jumpToIndex` is deprecated",
  "TabBarBottom is deprecated",
])

const App = () => (
  <View style={{ flex: 1, backgroundColor: "#0b1829" }}>
    <Routes/>
  </View>
)

export default App
