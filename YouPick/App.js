import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Login, Register, Home, SetProfile, Pick, ViewProfile } from "./screens";
import { SCREENS } from "./constants";

const AuthNavigator = createStackNavigator(
  {
    Login: Login,
    Register: Register
  },
  { initialRouteName: SCREENS.LOGIN }
);
const Navigator = createStackNavigator(
  {
    Home: Home,
    SetProfile: SetProfile,
    Pick: Pick,
    ViewProfile: ViewProfile
  },
  { initialRouteName: SCREENS.HOME }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      auth: AuthNavigator,
      app: Navigator
    },
    { initialRouteName: "auth" }
  )
);
