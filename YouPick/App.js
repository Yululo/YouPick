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
