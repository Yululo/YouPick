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
import Contacts from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

//search the restaurant based on the given city
import zomato from "zomato-api";
var client = zomato({
  userKey: "edf93ee64341e71e145d65045b494dde"
});
class Pick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      region: {
        latitude: null,
        longitude: null
      }
    };
    this.first = true;
    this.restaurants = [];
  }

  getFoodCuisines() {
    console.log("I am here");
    client
      .getCuisines({ city_id: "280" })
      .then(res => console.log(res))
      .catch(err => console.log("ERROR in CUISINES", err));
  }

  getRestaurants() {
    console.log("I am here");
    client
      .getGeocode({
        lat: this.state.region.latitude,
        lon: this.state.region.longitude
      })
      .then(res => console.log("RESTAURANTS", res))
      .catch(err => console.log("ERROR in CUISINES", err));
  }

  async currentLocation() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    console.log("got current position", location);
    await this.setState({
      region: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      }
    });
    console.log("My location: ", this.state.region);
  }

  async search() {
    await this.currentLocation();
    //this.getFoodCuisines();
    this.getRestaurants();

    // const req1 = fetch(
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "user-key": "edf93ee64341e71e145d65045b494dde"
    //     }
    //   }
    // ).then(res => res.json());
    // const req2 = fetch(
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=20&count=20",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "user-key": "edf93ee64341e71e145d65045b494dde"
    //     }
    //   }
    // ).then(res => res.json());
    // const req3 = fetch(
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=40&count=20",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "user-key": "edf93ee64341e71e145d65045b494dde"
    //     }
    //   }
    // ).then(res => res.json());
    // const req4 = fetch(
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=60&count=20",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "user-key": "edf93ee64341e71e145d65045b494dde"
    //     }
    //   }
    // ).then(res => res.json());
    // const req5 = fetch(
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&start=80&count=20",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "user-key": "edf93ee64341e71e145d65045b494dde"
    //     }
    //   }
    // ).then(res => res.json());

    // const [data1, data2, data3, data4, data5] = await Promise.all([
    //   req1,
    //   req2,
    //   req3,
    //   req4,
    //   req5
    // ]);

    // this.restaurants = [
    //   ...data1.restaurants,
    //   ...data2.restaurants,
    //   ...data3.restaurants,
    //   ...data4.restaurants,
    //   ...data5.restaurants
    // ];
    // console.log(this.restaurants.length);

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
