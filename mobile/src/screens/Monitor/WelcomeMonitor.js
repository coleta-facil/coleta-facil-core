import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import World from "../../assets/icons/World";
import ScreenTitle from "../../components/ScreenTitle";
import Button from "../../components/Button.js";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { StackActions, useNavigation } from "@react-navigation/core";
import { RectButton } from "react-native-gesture-handler";

const Welcome = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.dispatch(StackActions.replace("HomeMonitor"));
  };

  const goBack = () => {
    navigation.dispatch(StackActions.replace("Intro"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <RectButton onPress={goBack} style={{ position: "absolute", left: 15, top: 50 }}>
        <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
      </RectButton>
      <ScreenTitle>Acompanhe os coletores</ScreenTitle>
      <World />
      <Text style={styles.subTitle}>
        Esse módulo é usado para visualização da localização e rotas dos caminhões que
        coletam o lixo.
      </Text>

      <Button
        onPress={navigateHome}
        icon={<Entypo name="chevron-right" size={24} color="white" />}
      >
        Avançar
      </Button>
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
});

export default Welcome;
