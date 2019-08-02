import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Login, Register, Home, SetProfile } from "./screens";
import { SCREENS } from "./constants";

const AuthNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  { initialRouteName: SCREENS.LOGIN }
);
const Navigator = createStackNavigator({
  Home: Home,
  SetProfile: SetProfile
},
{ initialRouteName: SCREENS.HOME});

export default createAppContainer(
  createSwitchNavigator({
    auth: AuthNavigator,
    app: Navigator
  },
  { initialRouteName: "auth"})
);
