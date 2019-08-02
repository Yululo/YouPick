import { createStackNavigator, createAppContainer } from "react-navigation";
import {
 Login,
 Register,
 Home,
 Profile
} from "./screens";
import { SCREENS } from "./constants";

const Navigator = createStackNavigator({
  Home: Home,
  Login: Login ,
  Register: Register,
  Profile: Profile
},
{ initialRouteName: SCREENS.REGISTER });



export default createAppContainer(Navigator);
