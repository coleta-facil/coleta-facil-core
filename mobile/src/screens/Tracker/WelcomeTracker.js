import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";
import ScreenTitle from "../../components/ScreenTitle";

import { useNavigation } from "@react-navigation/core";
import { Theme } from "../../constants/theme";
import { RectButton } from "react-native-gesture-handler";
import LogoColetaFacil from "../../assets/icons/LogoColetaFacil";

const WelcomeTracker = () => {
  const navigation = useNavigation();

  const navigateHome = () => {
    navigation.navigate("InputToken");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle>Rastreador de coletores</ScreenTitle>
      <LogoColetaFacil width={200} height={200} />
      <Text style={styles.subTitle}>
        Esse módulo é usado para o envio da localização dos caminhões que fazem a coleta
        do lixo!
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
