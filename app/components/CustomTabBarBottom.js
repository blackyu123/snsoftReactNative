import React from "react"
import { TabBarBottom } from "react-navigation"
import { View, Text, TouchableOpacity, Image } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import HomeImage from "../../assets/menu/home.png"
import DepositImage from "../../assets/menu/deposit.png"
import WithdrawImage from "../../assets/menu/withdraw.png"
import AccountImage from "../../assets/menu/account.png"
import DividerImage from "../../assets/menu/divider.png"





const CustomTabBarBottom = props => {
  console.log(props.navigation.state.routes)
  const routeList = props.navigation.state.routes.map(route => {
    const { key, routeName } = route
    let iconName
    let tabDivider = <Image source={DividerImage} style={styles.tabItemDivider} resizeMode="contain"/>
    switch (routeName) {
      case "首页":
        iconName = HomeImage
        tabDivider = null
        break
      case "存款":
        iconName = DepositImage
        break
      case "History":
        iconName = WithdrawImage
        break
      case "Results":
        iconName = AccountImage
        break
      default:
        break
    }

    return (
      <View style={{ flex: 1 }} key={key}>
        <TouchableOpacity onPress={() => props.navigation.navigate(routeName)}>
          <Image source={iconName} style={styles.tabItemImage} resizeMode="contain"/>
        </TouchableOpacity>
        {tabDivider}
      </View>
    )
  })

  return (
    <View>
      <View style={styles.actionButton}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <Icon name={"home"} size={45} color={"#fff"} style={styles.buttonIcon}/>
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: "#000", flexDirection: "row", height:60 }}>
        {routeList}
      </View>
    </View>
  )
}

const styles = {
  actionButton: {
    position:   "absolute",
    bottom:     40,
    left:       0,
    right:      0,
    alignItems: "center",
    zIndex:     999,
  },
  buttonIcon:   {
    backgroundColor: "#6200EE",
    width:           50,
    height:          50,
    borderRadius:    50 / 2,
    textAlign:       "center",
  },
  tabItemImage:   {
    height: "100%",
  },
  tabItemDivider: {
    position: "absolute",
    top:      0,
    left:    0,
  },
}

export default CustomTabBarBottom
