import React, { useState, useEffect, useRef, createContext } from "react";
import * as Location from "expo-location";
import { Alert, Linking } from "react-native";

import firebase from "firebase/app";
import "firebase/database";

export const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {
  const [locationUser, setLocationUser] = useState();
  const [token, setTokenCx] = useState();
  const [idDevice, setIdDevice] = useState();

  const watcher = useRef();
  const calledForeground = useRef();

  async function callForegroundGeolocation(trackerMode) {
    calledForeground.current = true;
    const { status } = await Location.requestForegroundPermissionsAsync();
    console.log(status);
    if (status !== "granted") {
      Alert.alert(
        "Alerta!",
        "Para melhor funcionamento do app, prcisamos da sua localização 😀",
        [
          {
            text: "Abrir configurações",
            style: "default",
            onPress: () => Linking.openSettings(),
          },
          {
            text: "Negar",
            style: "destructive",
          },
        ]
      );
    } else {
      StartForegroundGeolocation(trackerMode);
    }
  }

  const StartForegroundGeolocation = async (trackerMode) => {
    console.log("Fetching Location");
    if (trackerMode) {
      watcher.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.BestForNavigation,
          distanceInterval: 1,
        },
        (location) => {
          setLocationUser(location.coords);
          if (idDevice) {
            firebase
              .database()
              .ref("devices/" + idDevice + "/location")
              .update({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
              });
          }
        }
      );
    } else {
      watcher.current = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          distanceInterval: 100,
        },
        (location) => {
          setLocationUser(location.coords);
        }
      );
    }
  };

  return (
    <CommonContext.Provider
      value={{
        locationUser,
        setTokenCx,
        setIdDevice,
        idDevice,
        callForegroundGeolocation,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};
