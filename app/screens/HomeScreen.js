import React from "react"
import { View, Text, Button, Image, ScrollView, StyleSheet, Dimensions } from "react-native"
import HotGame from "../../assets/hotgame.jpg"
import Lottery from "../../assets/lottery.jpg"
import LatestGame from "../../assets/newgame.jpg"
import HotGameAnimation from "../../assets/hotgame_animation.gif"
import meinv from "../../assets/people/pokergirl2.png"
import HomeGameList from "./HomeScreen/GameList"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../helpers/GlobalStyle"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
          <Image source={meinv} style={styles.peopleImage} resizeMode={"contain"}/>

          <ScrollView style={styles.container}>
            <View style={styles.products}>
              <HomeGameList/>
            </View>
          </ScrollView>

          {/*
            <View style={styles.products}>
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
*/}

        </View>

      </View>
    )
  }

}

const styles = {
  container:     {
    flex:    1,
    padding: 20,
    height:  "100%",
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
  products:      {
    width: SCREEN_WIDTH * (2 / 3),
  },
  peopleImage:   {
    height: SCREEN_HEIGHT * 1.2,
    width:  SCREEN_WIDTH * (1 / 3),
  },
}