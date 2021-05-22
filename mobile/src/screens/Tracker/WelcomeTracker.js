import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ScreenTitle from "../../components/ScreenTitle";

import { StackActions, useNavigation } from "@react-navigation/core";
import { Theme } from "../../constants/theme";
import { RectButton } from "react-native-gesture-handler";
import LogoColetaFacil from "../../assets/icons/LogoColetaFacil";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const WelcomeTracker = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.dispatch(StackActions.replace("InputToken"));
  };

  const goBack = () => {
    navigation.dispatch(StackActions.replace("Intro"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <RectButton onPress={goBack} style={{ position: "absolute", left: 15, top: 50 }}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
      </RectButton>
      <ScreenTitle>Rastreador de coletores</ScreenTitle>
      <LogoColetaFacil width={200} height={200} />
      <Text style={styles.subTitle}>
        Esse módulo é usado para o compartilhamento da localização dos responsáveis que
        fazem a coleta do lixo!
      </Text>

      <RectButton onPress={navigateHome} style={styles.button}>
        <Text style={styles.txtButton}>Avançar</Text>
        <Entypo name="chevron-right" size={24} color="white" />
      </RectButton>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  subTitle: {
    textAlign: "center",
    fontFamily: "PopRegular",
    fontSize: 19,
    paddingHorizontal: 20,
  },
  button: {
    height: 60,
    alignSelf: "center",
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Theme.SECONDARY,
  },
  txtButton: {
    color: Theme.WHITE,
    fontFamily: "PopBold",
    marginRight: 10,
  },
});

export default WelcomeTracker;
