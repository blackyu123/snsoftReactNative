import React from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import Gear from "../../../assets/menu/gear.png"
import Love from "../../../assets/menu/love.png"
import TopUp from "../../../assets/menu/topup.png"

export default class HeaderAsset extends React.Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.asset}>
          <Image source={Love} resizeMode={"contain"} style={styles.assetImage}/>
          <Text style={styles.assetText}>100</Text>
          <Image source={TopUp} resizeMode={"contain"} style={styles.assetTopUpImage}/>
        </View>
        <View style={styles.asset}>
          <Image source={Love} resizeMode={"contain"} style={styles.assetImage}/>
          <Text style={styles.assetText}>1000</Text>
          <Image source={TopUp} resizeMode={"contain"} style={styles.assetTopUpImage}/>
        </View>
        <View style={styles.asset}>
          <Image source={Love} resizeMode={"contain"} style={styles.assetImage}/>
          <Text style={styles.assetText}>10000</Text>
          <Image source={TopUp} resizeMode={"contain"} style={styles.assetTopUpImage}/>
        </View>
      </React.Fragment>
    )
  }
}

const styles = {
  asset:           {
    flexDirection:   "row",
    flex:            1,
    marginLeft:      3,
    marginRight:     3,
    borderWidth:     0.5,
    borderColor:     "#9a55a1",
    backgroundColor: "#382742",
    borderRadius:    15,
    height:          "100%",
    alignItems:      "center",
    justifyContent:  "center",
  },
  assetText:       {
    color:     "#fff",
    alignSelf: "center",
  },
  assetImage:      {
    height:      20,
    width:       20,
    marginTop:   4,
    marginLeft:  5,
    marginRight: "auto",
  },
  assetTopUpImage: {
    height:     30,
    width:      30,
    marginLeft: "auto",
  },
}