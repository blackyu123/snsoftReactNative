import React from "react"
import { View, Text } from "react-native"
import { TabNavigator, TabBarBottom, createStackNavigator, } from "react-navigation"
import Ionicons from "react-native-vector-icons/Ionicons"
import CustomHeader from "../components/CustomHeader"
import CustomTabBarBottom from "../components/CustomTabBarBottom"
import HeaderStyles from "../components/CustomHeaderStyle"
import AccountTabScreen from "./tabs/AccountTab"
import HomeScreen from "./HomeScreen"
import TopHeader from "../components/TopHeader"

let headerDefaultNavigationConfig = {
  header: props => <CustomHeader {...props} />,
  ...HeaderStyles
}

const HomeScreenStack = createStackNavigator(
  {
    Account: {
      screen:            HomeScreen,
      navigationOptions: {
        headerLeft:  null,
        headerTitle: "Account",
      },
    },
  },
  {
    navigationOptions: {
      header: props => <TopHeader {...props} />,
    },
  },
)

const HistoryTab = createStackNavigator(
  {
    History: {
      screen:            AccountTabScreen,
      navigationOptions: {
        headerLeft:  null,
        headerTitle: "History",
      },
    },
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    },
  },
)

const PhoneTab = createStackNavigator(
  {
    Phone: {
      screen:            AccountTabScreen,
      navigationOptions: {
        headerLeft:  null,
        headerTitle: "Phone Book",
      },
    },
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    },
  },
)

const ResultsTab = createStackNavigator(
  {
    Results: {
      screen:            AccountTabScreen,
      navigationOptions: {
        headerLeft:  null,
        headerTitle: "Your Results",
      },
    },
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    },
  },
)

const DashboardTabRoutes = TabNavigator(
  {
    首页: HomeScreenStack,
    Phone:   PhoneTab,
    History: HistoryTab,
    Results: ResultsTab,
  },
  {
    // default route
    initialRouteName:  "首页",

    // tab icons
    navigationOptions: ({ navigation }) => {
      const { routeName, routes } = navigation.state
      let params = routes && routes[1] && routes[1].params
      return {
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          switch (routeName) {
            case "首页":
              iconName = `ios-home${focused ? "" : "-outline"}`
              break
            case "Phone":
              iconName = `ios-megaphone${focused ? "" : "-outline"}`
              break
            case "History":
              iconName = `ios-folder${focused ? "" : "-outline"}`
              break
            case "Results":
              iconName = `ios-sunny${focused ? "" : "-outline"}`
              break
            default:
              break
          }
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor}/>
        },
      }
    },
    tabBarOptions:     {
      activeTintColor:   "#6200EE",
      inactiveTintColor: "#858585",
      style:             {
        height:          60,
        paddingVertical: 5,
        backgroundColor: "transparent",
      },
      labelStyle:        {
        fontSize:   12,
        lineHeight: 20,
      },
    },
    tabBarComponent:   props => <CustomTabBarBottom {...props}/>,
    tabBarPosition:    "bottom",
    animationEnabled:  true,
    swipeEnabled:      true,
  },
)

export default DashboardTabRoutes
