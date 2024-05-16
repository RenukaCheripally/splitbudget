import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from './app/screens/WelcomeScreen';
import ItineraryDetails from './app/screens/ItineraryDetails';
import ListOrganizers from './app/screens/ListOrganizers';
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListItineraries from "./app/screens/ListItineraries";
import AppTextInput from "./app/components/InputComponents/AppTextInput";
import Test from "./app/screens/Test";
import Screen from "./app/components/Screen";
import { View } from "react-native";
import AppPicker from "./app/components/InputComponents/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <RegisterScreen />
    </GestureHandlerRootView>
  );
}
