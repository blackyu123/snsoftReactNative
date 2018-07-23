import React from "react"
import { ScrollView, View, Image } from "react-native"
import game1 from "../../../assets/product/doudizhu.png"
import game2 from "../../../assets/product/cow.png"
import game3 from "../../../assets/product/honghei.png"
import game4 from "../../../assets/product/fish.png"
import { SCREEN_WIDTH, SCREEN_HEIGHT } from "../../helpers/GlobalStyle"

export default class HomeScreenGameList extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.row}>
          <Image source={game1} style={styles.item} resizeMode={"contain"}/>
          <Image source={game2} style={styles.item} resizeMode={"contain"}/>
        </View>
        <View style={styles.row}>
          <Image source={game3} style={styles.item} resizeMode={"contain"}/>
          <Image source={game4} style={styles.item} resizeMode={"contain"}/>
        </View>
      </View>
    )
  }
}

const styles = {
  row:  {
    flexDirection: "row",
    width:         160,
    height:        (SCREEN_HEIGHT / 2) - 70,
  },
  item: {
    height: "100%",
    width:  "100%",
  },
}
