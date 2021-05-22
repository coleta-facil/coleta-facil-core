import React from "react";
import { useState, useEffect } from "react";
import { LogBox, StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import * as Font from "expo-font";
import * as Updates from "expo-updates";
import Routes from "./src/routes";

import { firebaseConfig } from "./src/constants/config";

if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);

export default function App() {
  const [updateMsg, setUpdateMsg] = useState("");
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    LogBox.ignoreAllLogs(true);
    onLoad();
  }, []);

  // Carrega as fonts e assets
  const _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        PopRegular: require("./src/assets/fonts/Poppins-Regular.ttf"),
        PopLight: require("./src/assets/fonts/Poppins-Light.ttf"),
        PopBold: require("./src/assets/fonts/Poppins-Bold.ttf"),
      }),
    ]);
  };

  // CHECK ATUALIZAÇÕES E CARREGA ASSETS E FONTS
  const onLoad = async () => {
    if (__DEV__) {
      setUpdateMsg("Carregando");
      _loadResourcesAsync().then(() => {
        setAssetsLoaded(true);
      });
    } else {
      try {
        setUpdateMsg("Verificando atualizações");
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          setUpdateMsg("Biaxando atualizações");
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        } else {
          setUpdateMsg("Carregando");
          _loadResourcesAsync().then(() => {
            setAssetsLoaded(true);
          });
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return assetsLoaded ? (
    <Routes />
  ) : (
    <View style={styles.container}>
      <Text>{updateMsg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
