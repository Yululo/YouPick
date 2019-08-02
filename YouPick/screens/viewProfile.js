import React, { Component } from "react";
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
  ImageBackground,
  FlatList
} from "react-native";
import { List, ListItem } from "react-native-elements";
import { SCREENS } from "../constants";
import MultiSelect from "react-native-multiple-select";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

class ViewProfile extends Component {
  static navigationOptions = props => ({
    title: "Profile"
  });
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      imageUri: "",
      likedCuisines: [
        { id: 1, name: "Italian" },
        { id: 2, name: "Chinese" },
        { id: 3, name: "American" }
      ],
      openToTry: [],
      priceRange: [],
      restrictions: []
    };
  }

  render() {
    return (
      <ScrollView style={{ backgroundColor: "#a2444b" }}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignContent: "center"
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                alignSelf: "center"
              }}
            >
              Welcome, {this.state.username}{" "}
            </Text>
            <Image
              source={{
                uri: this.state.imageUri
              }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <Text style={styles.info}> Foods I Like: </Text>
          <View style={{ padding: 10, alignItems: "center", flex: 1 }}>
            {this.state.likedCuisines.map(l => (
              <ListItem
                key={l.id}
                title={l.name}
                titleStyle={{ color: "white" }}
                containerStyle={{
                  backgroundColor: "#a2444b",
                  height: 50,
                  width: 150
                }}
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  textAlign: "center"
                }}
              />
            ))}
            <Text></Text>
            <Text style={styles.info}> Foods I'm Willing To Try: </Text>
            {this.state.openToTry.map(l => (
              <ListItem
                key={l.id}
                title={l.name}
                titleStyle={{ color: "white" }}
                containerStyle={{
                  backgroundColor: "#a2444b",
                  height: 50,
                  width: 150
                }}
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  textAlign: "center"
                }}
              />
            ))}
            <Text></Text>
            <Text style={styles.info}> My Dietary Restrictions: </Text>
            {this.state.restrictions.map(l => (
              <ListItem
                key={l.id}
                title={l.name}
                titleStyle={{ color: "white" }}
                containerStyle={{
                  backgroundColor: "#a2444b",
                  height: 50,
                  width: 150
                }}
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  textAlign: "center"
                }}
              />
            ))}
            <Text></Text>
            <Text style={styles.info}> My Price Range: </Text>
            {this.state.priceRange.map(l => (
              <ListItem
                key={l.id}
                title={l.name}
                titleStyle={{ color: "white" }}
                containerStyle={{
                  backgroundColor: "#a2444b",
                  height: 50,
                  width: 150
                }}
                style={{
                  borderColor: "white",
                  borderWidth: 0.5,
                  textAlign: "center"
                }}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ViewProfile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#a2444b"
  },

  buttons: {
    fontSize: 40
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    fontFamily: "Courier New"
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
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "black"
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
  },
  info: {
    color: "white",
    fontSize: 20,
    alignSelf: "flex-start"
  }
});
