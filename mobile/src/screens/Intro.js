import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "../constants/theme";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

const Intro = () => {
  const navigation = useNavigation();

  const handleGoMonitor = () => {
    navigation.navigate("WelcomeMonitor");
  };

  const handleGoTracker = () => {
    navigation.navigate("WelcomeTracker");
  };

  return (
    <View style={styles.container}>
      <View style={[styles.viewBase, styles.viewTop]}>
        <RectButton
          onPress={handleGoMonitor}
          style={[styles.btnActions, styles.btnActionsTop]}
        >
          <MaterialCommunityIcons name="routes" size={60} color="white" />
        </RectButton>
        <Text style={styles.title}>Rotas</Text>
        <Text style={styles.subTitle}>
          Acesse as rotas dos caminhões de coleta de lixo.
        </Text>
      </View>
      <View style={styles.viewBase}>
        <RectButton
          onPress={handleGoTracker}
          style={[styles.btnActions, styles.btnActionsBottom]}
        >
          <MaterialCommunityIcons name="dump-truck" size={60} color="white" />
        </RectButton>
        <Text style={styles.title}>Rastreador</Text>
        <Text style={styles.subTitle}>
          Acesse o rastreador para compartilhar sua localização enquanto realiza a coleta.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewBase: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  viewTop: {
    marginTop: 80,
  },
  btnActions: {
    width: 130,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  btnActionsTop: {
    backgroundColor: Theme.PRIMARY,
  },
  btnActionsBottom: {
    backgroundColor: Theme.SECONDARY,
  },
  title: {
    marginTop: 20,
    fontFamily: "PopBold",
    fontSize: 20,
  },
  subTitle: {
    textAlign: "center",
    fontFamily: "PopRegular",
    paddingHorizontal: 20,
    marginTop: 10,
    fontSize: 15,
  },
});

export default Intro;
