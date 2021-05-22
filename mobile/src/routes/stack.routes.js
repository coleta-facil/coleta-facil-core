import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Theme } from "../constants/theme";
import Intro from "../screens/Intro";

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
  </StackRoutes.Navigator>
);

export default AppRoutes;
