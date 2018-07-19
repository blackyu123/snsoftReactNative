import React from "react"
import { View, Text, Image } from "react-native"
import { TabNavigator, createStackNavigator, } from "react-navigation"
import CustomHeader from "./CustomHeader"
import CustomTabBarBottom from "./CustomTabBarBottom"
import HeaderStyles from "./CustomHeaderStyle"
import AccountTabScreen from "../screens/tabs/AccountTab"
import HomeScreen from "../screens/HomeScreen"
import TopHeader from "./TopHeader"
import HomeImage from "../../assets/menu/home.png"
import DepositImage from "../../assets/menu/deposit.png"
import WithdrawImage from "../../assets/menu/withdraw.png"
import AccountImage from "../../assets/menu/account.png"
import DividerImage from "../../assets/menu/divider.png"

let headerDefaultNavigationConfig = {
  header: props => <CustomHeader {...props} />,
  ...HeaderStyles
}

// tab item
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

// tab container
const TabMenu = TabNavigator(
  {
    首页:      HomeScreenStack,
    存款:      PhoneTab,
    History: HistoryTab,
    Results: ResultsTab,
  },
  {
    // default route
    initialRouteName: "首页",
    tabBarOptions:     {
      activeTintColor:   "#6200EE",
      inactiveTintColor: "#858585",
      showLabel:         false,
      style:             {
        height:          60,
        paddingVertical: 2,
        backgroundColor: "#1c1e28",
      },
      labelStyle:        {
        fontSize:   12,
        lineHeight: 20,
      },
    },
    tabBarComponent:   props => <CustomTabBarBottom {...props}/>,
    tabBarPosition:    "bottom",
    animationEnabled:  false,
    swipeEnabled:      true,
  },
)

const styles = {
  tabItemImage:   {
    height: "100%",
  },
  tabItemDivider: {
    position: "absolute",
    top:      0,
    left:    0,
  },
}

export default TabMenu
