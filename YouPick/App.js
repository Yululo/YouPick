<<<<<<< HEAD
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Login, Register, Home, Profile, Pick } from "./screens";
import { SCREENS } from "./constants";

const Navigator = createStackNavigator(
  {
    Home: Home,
    Login: Login,
    Register: Register,
    Profile: Profile,
    Pick: Pick
  },
  { initialRouteName: SCREENS.LOGIN }
);

export default createAppContainer(Navigator);
=======
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
>>>>>>> 3dc963f7e1ed13f5ecd3537de5dbe3989b61c938
