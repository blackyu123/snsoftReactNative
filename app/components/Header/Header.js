import React from "react"
import { View, Image, Text } from "react-native"
import Avatar from "../../../assets/avatar.png"
import Gear from "../../../assets/menu/gear.png"
import MenuBar from "../../../assets/menu/purple-menu.png"
import Love from "../../../assets/menu/love.png"
import TopUp from "../../../assets/menu/topup.png"

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.bar}>
        <Image source={MenuBar} resizeMode={"stretch"} style={styles.menuBar}/>
        <View style={styles.avatar}>
          <Image source={Avatar} resizeMode={"contain"} style={styles.avatarImage}/>
          <View>
            <Text style={styles.avatarText}>游客</Text>
            <Text style={styles.avatarText}>LV.0 游客</Text>
          </View>
        </View>

        <View style={{ padding: 5, flexDirection: "row", flex: 3, }}>
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

          <Image source={Gear} resizeMode={"contain"} style={styles.settingImage}/>
        </View>

      </View>
    )
  }
}

const styles = {
  bar:             {
    flexDirection:  "row",
    height:         50,
    paddingTop:     5,
    paddingBottom:  5,
    //backgroundColor: "#888",
    justifyContent: "space-between",
  },
  menuBar:         {
    position: "absolute",
    width:    "100%",
    height:   50,
  },
  avatar:          {
    flex:          1,
    flexDirection: "row",
  },
  avatarImage:     {
    width:        40,
    height:       40,
    marginRight:  5,
    marginLeft:   5,
    borderRadius: 50 / 2,
  },
  avatarText:      {
    color: "#fff",
  },
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
    height: 30,
    width:  30,
    marginLeft: "auto",
  },
  settingImage:    {
    marginLeft: 5,
    height:     "100%",
  },
}