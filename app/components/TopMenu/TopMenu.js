import React from "react"
import { View, Text, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-navigation"
import menu1 from "../../../assets/menu/1.png"
import menu2 from "../../../assets/menu/2.png"
import menu3 from "../../../assets/menu/3.png"

const CustomTabBar = ({ navigation }) => {
  const { routes } = navigation.state
  const menuNode = routes.map(route => {
    let button = menu3
    switch (route.routeName) {
      case "Home":
        button = menu1
        break
      case "Dashboard":
        button = menu2
        break
      default:
        return null
    }

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(route.routeName)}
        style={styles.item}
        key={route.routeName}>
        <Image source={button} resizeMode={"contain"} style={styles.itemImage}/>
      </TouchableOpacity>
    )
  })

  return (
    <View style={styles.tabContainer}>
      {menuNode}
      <View style={styles.item}>
        <Image source={menu3} resizeMode={"contain"} style={styles.itemImage}/>
      </View>
    </View>
  )
}

const styles = {
  tabContainer: {
    flexDirection: "row",
    position:      "absolute",
    bottom:        10,
    paddingRight:  10,
    alignSelf:     "flex-end",
  },
  tab:          {
    flex:           1,
    alignItems:     "center",
    justifyContent: "center",
    margin:         4,
    borderWidth:    1,
    borderColor:    "#ddd",
    borderRadius:   4,
  },
  item:         {
    margin: 5,
  },
  itemImage:    {
    width:  50,
    height: 50,
  },
}

export default CustomTabBar