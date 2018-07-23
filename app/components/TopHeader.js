import React from "react"
import { View, Text, Platform, Image, TouchableOpacity } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import { Button, Icon, Header } from "native-base"
import Ionicons from "react-native-vector-icons/Ionicons"
import SupportImage from "../../assets/menu/support.png"
import MessageImage from "../../assets/menu/message.png"
import RegisterImage from "../../assets/menu/register.png"
import LoginImage from "../../assets/menu/login.png"
import LoginModal from "./LoginModal"

const styles = {
  menuItem:      {
    flex:           1,
    justifyContent: "center",
    alignItems:     "center",
  },
  menuItemImage: {
    width: 60,
  },
}

export default class TopHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoginModal: false,
    }
  }

  render() {
   // alert(this.props.navigation.state.routes[0])
    const { showLoginModal } = this.state

    return (
      <View
        style={{
          height:    56,
          marginTop: Platform.OS === "ios" ? 20 : 0,
        }}>
        <LinearGradient colors={["#1c212f", "#1b1513"]}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.menuItem}>
              <Image source={SupportImage} style={styles.menuItemImage} resizeMode={"contain"}/>
            </View>
            <View style={styles.menuItem}>
              <Image source={MessageImage} style={styles.menuItemImage} resizeMode={"contain"}/>
            </View>
            <View style={styles.menuItem}>
              <Image source={RegisterImage} style={styles.menuItemImage} resizeMode={"contain"}/>
            </View>
            <View style={styles.menuItem}>
              <TouchableOpacity onPress={() => this.handleLoginModalOpen()}>
                <Image source={LoginImage} style={styles.menuItemImage} resizeMode={"contain"}/>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <LoginModal showModal={showLoginModal} onLoginModalClose={()=>this.handleLoginModalClose()}/>
      </View>
    )
  }

  // event handler
  handleLoginModalOpen() {
    this.setState({
      showLoginModal: true,
    })
  }

  handleLoginModalClose() {
    this.setState({
      showLoginModal: false,
    })
  }

}