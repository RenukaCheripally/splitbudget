import { GestureHandlerRootView } from "react-native-gesture-handler";

import WelcomeScreen from './app/screens/WelcomeScreen';
import ListItineraries from './app/screens/ListItineraries';
import ListOrganizers from './app/screens/ListOrganizers';
import Test from "./app/screens/Test";

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>{<ListOrganizers />}</GestureHandlerRootView>
  );
}
