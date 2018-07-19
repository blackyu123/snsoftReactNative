import React from "react"
import { View, Text, Button, Image, ScrollView, StyleSheet } from "react-native"
import HotGame from "../../assets/hotgame.jpg"
import Lottery from "../../assets/lottery.jpg"
import LatestGame from "../../assets/newgame.jpg"
import HotGameAnimation from "../../assets/hotgame_animation.gif"
import NewsMarquee from "../components/NewsMarquee"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ flexDirection: "row", height: 300 }}>
          <View style={{ width: "58%", paddingRight: 10, position: "relative" }}>
            <Image
              resizeMode={"stretch"}
              style={[styles.image, { flex: 1 }]}
              source={HotGame}/>
            <Image
              resizeMode={"stretch"}
              style={[styles.absoluteImage, { flex: 1 }]}
              source={HotGameAnimation}/>
          </View>

          <View style={{ width: "42%" }}>
            <Image
              resizeMode={"stretch"}
              style={[styles.image, { flex: 2, marginBottom: 10 }]}
              source={Lottery}/>
            <Image
              resizeMode={"stretch"}
              style={[styles.image, { flex: 1 }]}
              source={LatestGame}/>
          </View>
        </View>

        <View style={{ flexDirection: "row", height: 300 }}>
          <View style={{ width: "58%", paddingRight: 10, position: "relative" }}>
            <Image
              resizeMode={"stretch"}
              style={[styles.image, { flex: 1 }]}
              source={HotGame}/>
            <Image
              resizeMode={"stretch"}
              style={[styles.absoluteImage, { flex: 1 }]}
              source={HotGameAnimation}/>
          </View>

          <View style={{ width: "42%" }}>
            <Image
              resizeMode={"stretch"}
              style={[styles.image, { flex: 2, marginBottom: 10 }]}
              source={Lottery}/>
            <Image
              resizeMode={"stretch"}
              style={[styles.image, { flex: 1 }]}
              source={LatestGame}/>
          </View>
        </View>

      </ScrollView>
    )
  }

}

const styles = {
  container:     {
    flex:    1,
    padding: 20,
    //backgroundColor: "#0b1829",
  },
  image:         {
    borderRadius: 3,
    overflow:     "hidden",
    width:        "100%",
  },
  absoluteImage: {
    position: "absolute",
    width:    "100%",
    height:   "100%",
    top:      0,
  },
}