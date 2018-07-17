import React from "react"
import { View } from "react-native"
import HomeScreen from "../screens/HomeScreen"
import DashboardTabRoutes from "../screens/Dashboard"
import { createStackNavigator } from "react-navigation"
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
      screen:            DashboardTabRoutes,
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