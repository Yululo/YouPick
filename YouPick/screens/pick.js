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

// search the restaurant based on the given city

class Pick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
    this.first = true;
    this.restaurants = [];
  }

  async search() {
    const req1 = fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-key": "edf93ee64341e71e145d65045b494dde"
        }
      }
    ).then(res => res.json());
    const req2 = fetch(
      "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=20&count=20",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "user-key": "edf93ee64341e71e145d65045b494dde"
        }
      }
    ).then(res => res.json());
    const [data1, data2] = await Promise.all([req1, req2]);
    console.log(data1.results_shown);
    console.log(JSON.stringify(data1.restaurants[19], null, 2));
    console.log(data2.results_shown);
    console.log(JSON.stringify(data2.restaurants[0], null, 2));
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/youpick-bg.png")}
        resizeMode="cover"
        style={{ width: "100%", height: "100%", flex: 1 }}
      >
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.search()}>
            <Text>Search</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Get your restaurant</Text>
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
