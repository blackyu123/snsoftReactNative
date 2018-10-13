import React from "react"
import { View, Image, ImageBackground, Text, TouchableHighlight } from "react-native"
import Modal from "react-native-modal"
import LoginForm from "../LoginForm"
import ModalBg from "../../../assets/bg/modal.png"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../helpers/GlobalStyle"

export default class SettingModal extends React.Component {
  render() {
    const { showModal, onModalClose } = this.props

    return (
      <View>
        <Modal
          isVisible={showModal === true}
          avoidKeyboard={true}
          animationIn={"zoomIn"}
          animationOut={"zoomOut"}
          backdropOpacity={0.5}
          onBackdropPress={onModalClose}
          onBackButtonPress={onModalClose}>
          <View style={styles.container}>
            <ImageBackground source={ModalBg} resizeMode={"contain"} style={styles.bg}>
              <View style={styles.body}>
                <Text style={styles.text}>asjdklasj dklasjkld asjkld jaslkdj lasjd lka sjdlkasjlkd asj lkdjaslkd jaslkd
                  jaslkdj klas jdlkasd
                  asd asd asd asd asd asj das
                  d async d asd asd async dasd a asjdklasj lkjasld asdjk lasjlkdas
                  dasj asjdlkasjd
                  asd asj asjdlas
                  as jaso jlaskj las
                  asdk jaslkdjas
                  as djkasd asd as superas
                  d async d async d as das
                  da sdas
                  as asd asd as d
                  dasa sd asd asd
                  d superas asas async s d
                  a s ahjkd ahjsh djasd asd async das
                  d supera supersd
                  assd superas dasdas
                  da asd as async a
                  jkas jdklasjkl jaslkj dlkas
                  a sdas
                  dasd async d asd
                  jaslksd</Text>
              </View>
            </ImageBackground>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = {
  container: {
    justifyContent: "center",
    alignItems:     "center",
    flex:           1,
    width:          300,
    height:         400,
    margin:         "auto",
  },
  bg:        {
    flex:          1,
    height:        "100%",
    width:         "100%",
  },
  body:      {
    paddingTop:   80,
    paddingLeft:  40,
    paddingRight: 40,
    paddingBottom: 100,
    width:        "100%",
    height:       "100%",
    overflow:     "scroll",
  },
  text:      {
    color: "#fff",
  },
}
