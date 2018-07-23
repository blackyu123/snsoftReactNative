import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import {
  TabRouter, createNavigationContainer, createNavigator, SafeAreaView,
  createStackNavigator,
} from "react-navigation"
import HomeScreen from "../screens/HomeScreen"
import TabMenu from "../components/TabMenu"
import CustomHeader from "../components/CustomHeader"
import HeaderStyles from "../components/CustomHeaderStyle"
import TopMenu from "../components/TopMenu/TopMenu"
import AccountTabScreen from "../screens/tabs/AccountTab"
import Header from "../components/Header/Header"

import TopHeader from "../components/TopHeader"

const HomeStack = createStackNavigator(
  {
    Phone: {
      screen: HomeScreen,
    },
    ok:    {
      screen: HomeScreen,
    },
  },
  {
    navigationOptions: {
      header:      props => <Header {...props} />,
    },
    cardStyle:         {
      backgroundColor: "transparent",
    },
  },
)

const Routes = TabRouter(
  {
    Home:      {
      screen: HomeStack,
    },
    Profile:   {
      screen: HomeScreen,
    },
    Dashboard: {
      screen: TabMenu,
    },
  },
  {
    initialRouteName:  "Home",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true,
    },
  },
)

const CustomTabView = ({ descriptors, navigation }) => {
  const { routes, index } = navigation.state
  const descriptor = descriptors[routes[index].key]
  const ActiveScreen = descriptor.getComponent()
  return (
    <View style={{ flex: 1 }}>
      <ActiveScreen navigation={descriptor.navigation}/>
      <TopMenu navigation={navigation}/>
    </View>
  )
}

const CustomTabs = createNavigationContainer(
  createNavigator(CustomTabView, Routes, {}),
)

export default CustomTabs