import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";

import { Ionicons, Entypo } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "../../constants/theme";

const InputToken = () => {
  const [token, setToken] = useState("");

  const handleToken = () => {
    if (token.length > 0) {
        
    } else {
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.wrappedView, { alignItems: "center" }]}>
          <Text style={styles.title}>Digite o código de registro abaixo.</Text>
          <Ionicons name="barcode-outline" size={100} color="black" />
          <Text style={styles.subTitle}>
            Código único, usado para identificação do caminhão de coleta.
          </Text>
          <TextInput value={token} autoFocus style={styles.input} />
          <RectButton onPress={handleToken} style={styles.button}>
            <Text style={styles.txtButton}>Confirmar código</Text>
            <Entypo name="chevron-right" size={24} color="white" />
          </RectButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  wrappedView: {
    marginTop: 60,
  },
  title: {
    fontFamily: "PopBold",
    fontSize: 18,
    marginTop: 15,
  },
  subTitle: {
    fontFamily: "PopRegular",
    textAlign: "center",
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
    marginTop: 200,
  },
  txtButton: {
    color: Theme.WHITE,
    fontFamily: "PopBold",
    marginRight: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: Theme.SECONDARY,
    marginTop: 20,
    width: "90%",
    height: 60,
    paddingHorizontal: 15,
    borderRadius: 8,
    fontSize: 20,
    fontFamily: "PopRegular",
  },
});

export default InputToken;
