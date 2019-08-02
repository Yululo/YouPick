import React from "react";
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
} from "react-native";
import { SCREENS } from "../constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import zomato from "zomato-api";
var client = zomato({ userKey: "edf93ee64341e71e145d65045b494dde" });

class Pick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
    this.first = true;
    this.restaurants = [];
  }

  // search the restaurant based on the given city
  async search() {
    await this.currentLocation();
    Promise.all([
      client.search({
        query: "koreatown",
        lat: this.state.region.latitude,
        lon: this.state.region.longitude,
        count: 20,
        cuisines: [55, 159, 182, 168, 121]
      }),
      client.search({
        query: "koreatown",
        lat: this.state.region.latitude,
        lon: this.state.region.longitude,
        count: 20,
        start: 20,
        cuisines: [55, 159, 182, 168, 121]
      }),
      client.search({
        query: "koreatown",
        lat: this.state.region.latitude,
        lon: this.state.region.longitude,
        count: 20,
        start: 40,
        cuisines: [55, 159, 182, 168, 121]
      }),
      client.search({
        query: "koreatown",
        lat: this.state.region.latitude,
        lon: this.state.region.longitude,
        count: 20,
        start: 60,
        cuisines: [55, 159, 182, 168, 121]
      }),
      client.search({
        query: "koreatown",
        lat: this.state.region.latitude,
        lon: this.state.region.longitude,
        count: 20,
        start: 80,
        cuisines: [55, 159, 182, 168, 121]
      })
    ]).then(([res1, res2, res3, res4, res5]) => {
      // console.log(
      //   "RESTAURANTS",
      //   res.restaurants,
      //   "restaurant length ",
      //   res.restaurants.length
      // )
      this.restaurants = [
        ...res1.restaurants,
        ...res2.restaurants,
        ...res3.restaurants,
        ...res4.restaurants,
        ...res5.restaurants
      ];
    });
    // console.log(data1.results_shown);
    // console.log(JSON.stringify(data1.restaurants[19], null, 2));
    // console.log(data2.results_shown);
    // console.log(JSON.stringify(data2.restaurants[0], null, 2));
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/youpick-bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter the area you want get restaurants from"
            onChangeText={text => this.setState({ locationArea: text })}
            value={this.state.locationArea}
          />
          <TouchableOpacity
            onPress={() => this.search()}
            style={styles.buttonGrey}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Pick;
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
