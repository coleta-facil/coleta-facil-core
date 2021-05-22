import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";

import HomeMonitor from "../screens/Monitor/HomeMonitor";
import Schedules from "../screens/Monitor/Schedules";
import { Theme } from "../constants/theme";

const Tabs = AnimatedTabBarNavigator();

const AuthRoutes = () => (
  <Tabs.Navigator
    tabBarOptions={{
      activeTintColor: Theme.WHITE,
      inactiveTintColor: Theme.DARK,
      activeBackgroundColor: Theme.PRIMARY,
    }}
  >
    <Tabs.Screen
      name="Mapa"
      component={HomeMonitor}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialIcons name="map" size={size} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="Horários"
      component={Schedules}
      options={{
        tabBarIcon: ({ size, color }) => (
          <FontAwesome5 name="clock" size={size} color={color} />
        ),
      }}
    />
  </Tabs.Navigator>
);

export default AuthRoutes;
