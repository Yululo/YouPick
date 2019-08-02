import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  TextInput,
  Button,
  ScrollView,
  RefreshControl,
  AsyncStorage,
  Image,
  ImageBackground
} from 'react-native';
import { SCREENS } from "../constants";

function Home(props){

    return(
      <ImageBackground
        source={require("../assets/youpick-bg.png")}
        resizeMode='cover'
        style={{ width: "100%", height: "100%", flex:1 }}
      >
        <View style = {styles.container}>
          <Text style = {styles.title}>Go to your first restaurant!</Text>
        </View>
      </ImageBackground>
    )
}
Home.navigationOptions = props => ({
  title: "Home",
  headerRight: (
    <Button
      title="View Profile"
      onPress={() => props.navigation.navigate(SCREENS.PROFILE)}
    />
  ),
  headerLeft: (
    <Button
      title="Log Out"
      onPress={() => props.navigation.navigate(SCREENS.LOGIN)}
    />
  )
})

export default Home;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  buttons: {
    fontSize: 40
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Courier New",
    color: "white",
    fontWeight: "bold",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 1,
    textShadowColor: '#000',
  },

  headers: {
    fontSize: 50,
    textAlign: "center"
  },
  input: {
    fontSize: 15,
    width: 400,
    height: 40,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  users: {
    borderColor: "black",
    borderWidth: 0.5,
    borderStyle: "solid",
    padding: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  messages: {
    fontSize: 10,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    margin: 5,
    backgroundColor: "white"
  },
  buttonGreen: {
    alignSelf: "stretch",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#40D654"
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  },
  buttonBlue: {
    alignSelf: "stretch",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "#368FD5"
  },
  buttonGrey: {
    alignSelf: "stretch",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "grey"
  },
  text: {
    marginLeft: 10
  }
});
