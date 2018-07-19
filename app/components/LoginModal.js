import React from "react"
import { View, Text, TouchableHighlight } from "react-native"
import Modal from "react-native-modal"
import LoginForm from "./LoginForm"

export default class LoginModal extends React.Component {
  render() {
    const { showModal, onLoginModalClose } = this.props

    return (
      <View>
        <Modal
          isVisible={showModal === true}
          avoidKeyboard={true}
          animationIn={"zoomIn"}
          animationOut={"zoomOut"}
          backdropOpacity={0.5}
          onBackdropPress={onLoginModalClose}
          onBackButtonPress={onLoginModalClose}>
          <View style={styles.body}>
            <LoginForm/>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = {
  body: {
    backgroundColor: "#fff",
    padding:         20,
    height:          200,
  },

}
