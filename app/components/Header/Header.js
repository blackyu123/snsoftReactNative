import React from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import Avatar from "../../../assets/avatar.png"
import Gear from "../../../assets/menu/gear.png"
import MenuBar from "../../../assets/menu/purple-menu.png"
import Love from "../../../assets/menu/love.png"
import TopUp from "../../../assets/menu/topup.png"
import SettingModal from "./SettingModal"
import HeaderAsset from "./HeaderAsset"

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showSettingModal: false,
    }
    this.handleSettingModalOpen = this.handleSettingModalOpen.bind(this)
    this.handleSettingModalClose = this.handleSettingModalClose.bind(this)
  }

  render() {
    const { showSettingModal } = this.state

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
          <HeaderAsset/>
          <TouchableOpacity onPress={this.handleSettingModalOpen}>
            <Image source={Gear} resizeMode={"contain"} style={styles.settingImage}/>
          </TouchableOpacity>
        </View>
        <SettingModal showModal={showSettingModal} onModalClose={this.handleSettingModalClose}/>
      </View>
    )
  }

  // event handler
  handleSettingModalOpen() {
    this.setState({
      showSettingModal: true,
    })
  }

  handleSettingModalClose() {
    this.setState({
      showSettingModal: false,
    })
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
  settingImage:    {
    marginLeft: 5,
    height:     "100%",
  },
}