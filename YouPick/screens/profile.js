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
  Image
} from "react-native";
import { SCREENS } from "../constants";
import MultiSelect from "react-native-multiple-select";

class Profile extends Component {
  static navigationOptions = props => ({
    title: "Profile"
  });
  constructor(props) {
    super(props);
    this.state = {
      likedCuisines: [],
      openToTry: [],
      priceRange: [],
      restrictions: []
    };
  }

  onSelectedItemsChange1 = selectedItems => {
    this.setState({ likedCuisines: selectedItems });
  };
  onSelectedItemsChange2 = selectedItems => {
    this.setState({ openToTry: selectedItems });
  };
  onSelectedItemsChange3 = selectedItems => {
    this.setState({ priceRange: selectedItems });
  };
  onSelectedItemsChange4 = selectedItems => {
    this.setState({ restrictions: selectedItems });
  };

  render() {
    let cuisines = [
      { id: 1, name: "Italian" },
      { id: 2, name: "Chinese" },
      { id: 3, name: "American" }
    ];
    let prices = [
      { id: 1, name: "$" },
      { id: 2, name: "$$" },
      { id: 3, name: "$$$" },
      { id: 4, name: "$$$$" }
    ];
    let restrictions = [
      { id: 1, name: "None" },
      { id: 2, name: "Vegetarian" },
      { id: 3, name: "Vegan" },
      { id: 4, name: "Pescatarian" },
      { id: 5, name: "Gluten Free" }
    ];

    return (
      <ImageBackground
        source={require("../assets/youpick-bg.png")}
        resizeMode='cover'
        style={{ width: "100%", height: "100%", flex:1 }}
      >
      <ScrollView>
        <View style={{ display: "flex" }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 30 }}>Complete your profile!</Text>
            <Text> </Text>
          </View>
          <View style={{ flex: 1}}>
            <Text style={styles.info}> <Text style = {{fontWeight: "bold"}}>Username here </Text></Text>
            <Text> </Text>
            <Text style={styles.info}><Text style = {{fontWeight: "bold"}}> Email here </Text></Text>
          </View>
          <View style={{ flex: 1}}>
            <Image
              source={{
                uri:
                  "https://www.himgs.com/imagenes/hello/social/hello-fb-logo.png"
              }}
              style={{ width: 100, height: 100, alignSelf: "flex-end" }}
            />
          </View>
          <Text> </Text>
          <Text style={styles.info}>What food do you like?</Text>
          <MultiSelect
            style={{ flex: 1 }}
            bgColor={"white"}
            tintColor={"#666666"}
            activityTintColor={"green"}
            items={cuisines}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange1}
            selectedItems={this.state.likedCuisines}
          />
          <Text> </Text>
          <Text style={styles.info}>What food are you open to trying? </Text>
          <MultiSelect
            style={{ flex: 1 }}
            bgColor={"white"}
            tintColor={"#666666"}
            activityTintColor={"green"}
            items={cuisines}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange2}
            selectedItems={this.state.openToTry}
          />
          <Text> </Text>
          <Text style={styles.info}>Any dietary restrictions? </Text>
          <MultiSelect
            style={{ flex: 1 }}
            bgColor={"white"}
            tintColor={"#666666"}
            activityTintColor={"green"}
            items={restrictions}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange4}
            selectedItems={this.state.restrictions}
          />
          <Text> </Text>
          <Text style={styles.info}>
            What price range are you looking for?{" "}
          </Text>
          <MultiSelect
            style={{ flex: 1 }}
            bgColor={"white"}
            tintColor={"#666666"}
            activityTintColor={"green"}
            items={prices}
            uniqueKey="id"
            onSelectedItemsChange={this.onSelectedItemsChange3}
            selectedItems={this.state.priceRange}
          />
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 5
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
    // fontFamily: "Comic Sans",
    fontSize: 20,
    alignSelf: "flex-start"
  }
});
