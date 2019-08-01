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
  Image
} from 'react-native';
import { SCREENS } from "../constants";

class Register extends Component {
  static navigationOptions = props => ({
    title: "Sign Up"
  });
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  register() {
    if (!this.state.username || !this.state.password) {
      alert("Please enter username and password!");
      return;
    }
    fetch("https://hohoho-backend.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include",
      redirect: "follow",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        /* do something with responseJson and go back to the Login view but
         * make sure to check for responseJson.success! */
        // console.log("json", responseJson);

        if (responseJson.success === true && responseJson.user) {
          this.props.navigation.navigate("LogIn");
        }
      })
      .catch(err => {
        alert(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={text => this.setState({ username: text })}
          value={this.state.username}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          onChangeText={text => this.setState({ password: text })}
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => this.register()}
          style={styles.buttonRed}
        >
          <Text style={styles.buttonText}> Sign Up </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },

  buttons: {
    fontSize: 40
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
  buttonRed: {
    alignSelf: "stretch",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    backgroundColor: "red"
  },
  text: {
    marginLeft: 10
  }
});

export default Register;
