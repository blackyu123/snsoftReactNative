import React from "react"
import { View } from "react-native"
import { createStackNavigator } from "react-navigation"
import HomeScreen from "../screens/HomeScreen"
import TabMenu from "../components/TabMenu"
import CustomHeader from "../components/CustomHeader"
import HeaderStyles from "../components/CustomHeaderStyle"

const Routes = createStackNavigator(
  {
    Home:      {
      screen:            HomeScreen,
      navigationOptions: {
        headerTitle: "Home",
        header:      props => <CustomHeader {...props} />,
      },
    },
    Dashboard: {
      screen:            TabMenu,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName:  "Dashboard",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true,
    },
  },
)

export default Routes