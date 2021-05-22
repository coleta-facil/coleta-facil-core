import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeMonitor from "../screens/Monitor/WelcomeMonitor";
import WelcomeTracker from "../screens/Tracker/WelcomeTracker";
import { Theme } from "../constants/theme";
import Intro from "../screens/Intro";
import InputToken from "../screens/Tracker/InputToken";

const StackRoutes = createStackNavigator();

const AppRoutes = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: Theme.WHITE,
      },
    }}
  >
    <StackRoutes.Screen name="Intro" component={Intro} />
    <StackRoutes.Screen name="WelcomeMonitor" component={WelcomeMonitor} />
    <StackRoutes.Screen name="WelcomeTracker" component={WelcomeTracker} />
    <StackRoutes.Screen name="InputToken" component={InputToken} />
  </StackRoutes.Navigator>
);

export default AppRoutes;
