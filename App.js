import React from "react"
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native"
import { createStackNavigator, TabNavigator, TabBarBottom } from "react-navigation"
import Icon from "react-native-vector-icons/FontAwesome"
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons"
import HomeScreen from "./screens/HomeScreen"
import PopularGameListScreen from "./screens/PopularGameListScreen"
import { YellowBox } from "react-native"

YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"])

const HomeStack = createStackNavigator({
  Home:    { screen: HomeScreen },
  Details: { screen: PopularGameListScreen },
})

const SettingsStack = createStackNavigator({
  Settings: { screen: PopularGameListScreen },
  Details:  { screen: PopularGameListScreen },
})

class LogoTitle extends React.Component {
  render() {
    return (
      <View>as</View>
    )
  }
}

export default createStackNavigator({
  MyTab: {
    screen:            TabNavigator({
        首页: { screen: HomeStack },
        存款: { screen: SettingsStack },
        提款: { screen: SettingsStack },
        账户: { screen: SettingsStack },
      },
      {
        navigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state
            let icon
            if (routeName === "首页") {
              icon = <Icon name={"home"} size={25} color={tintColor}/>
            } else if (routeName === "存款") {
              icon = <MaterialIcon name={"poker-chip"} size={25} color={tintColor}/>
            }

            return icon
          },
        }),
        tabBarComponent:   TabBarBottom,
        tabBarPosition:    "bottom",
        tabBarOptions:     {
          activeTintColor:   "tomato",
          inactiveTintColor: "gray",
        },
        animationEnabled:  false,
        swipeEnabled:      false,
      },),
    navigationOptions: { title: "Header title" },
  },
})
