import React from "react"
import { TabBarBottom } from "react-navigation"
import { View, Text, Button } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"



const CustomTabBarBottom = props => {
  return (
    <View>
      <View style={styles.actionButton}>
        <Button onPress={() => props.navigation.navigate("Home")} title="a">
          <Icon name={"home"} size={45} color={"#fff"} style={styles.buttonIcon}/>
        </Button>
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <TabBarBottom {...props} />
      </View>
    </View>
  )
}

const styles = {
  actionButton: {
    backgroundColor: "#6200EE",
    width:           50,
    height:          50,
    borderRadius:    50 / 2,
    position:        "absolute",
    bottom:          40,
    left:            155,
    zIndex:          999,
  },
  buttonIcon:   {
    textAlign: "center",
  },
}

export default CustomTabBarBottom
