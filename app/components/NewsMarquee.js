import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import MarqueeText from "react-native-marquee"

export default class NewsMarquee extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MarqueeText
          style={{ fontSize: 14 }}
          duration={6000}
          marqueeOnStart
          loop
          marqueeDelay={1000}
          marqueeResetDelay={1000}
        >
          1、全新易游，不同观感，不同享受，劲爆优惠助您发大财！ 2、【MG游戏大厅】目前正在进行系统临时升级维护，维护期间暂时无法登入游戏，也无法查询或将金额带入\转出进行提款，造成不便敬请谅解！
        </MarqueeText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:           1,
    justifyContent: "center",
  },
})