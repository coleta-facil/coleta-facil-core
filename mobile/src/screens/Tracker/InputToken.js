import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";

import { Ionicons, Entypo } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "../../constants/theme";

import firebase from "firebase/app";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StackActions, useNavigation } from "@react-navigation/core";
import { useContext } from "react";
import { CommonContext } from "../../contexts/commonContext";

const InputToken = () => {
  const navigation = useNavigation();
  const [token, setToken] = useState("");
  const disableButton = useRef();

  const { setTokenCx, setIdTruck } = useContext(CommonContext);

  const handleToken = () => {
    if (!disableButton.current) {
      disableButton.current = true;
      if (token.length > 0) {
        const trucksRef = firebase.database().ref("trucks/");
        trucksRef.once("value", async (data) => {
          const db = data.val();
          if (db) {
            const validateCode = Object.keys(db)
              .filter((truck) => db[truck].token === token)
              .map((data) => {
                setTokenCx(token);
                setIdTruck(data);
                return db[data];
              });

            if (validateCode.length > 0) {
              navigation.dispatch(StackActions.replace("HomeTracker"));
            } else {
              Alert.alert("Alerta!", "Token inválido.", [
                {
                  text: "Ok",
                  onPress: () => (disableButton.current = false),
                },
              ]);
            }
          }
        });
      } else {
        Alert.alert("Alerta!", "Token inválido.", [
          {
            text: "Ok",
            onPress: () => (disableButton.current = false),
          },
        ]);
      }
    }
  };

  const goBack = () => {
    navigation.dispatch(StackActions.replace("Intro"));
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <RectButton onPress={goBack} style={{ position: "absolute", left: 15, top: 30 }}>
          <MaterialCommunityIcons name="arrow-left" size={30} color="black" />
        </RectButton>
        <View style={[styles.wrappedView, { alignItems: "center" }]}>
          <Text style={styles.title}>Digite o código de registro abaixo.</Text>
          <Ionicons name="barcode-outline" size={100} color="black" />
          <Text style={styles.subTitle}>
            Código único, usado para identificação do caminhão de coleta.
          </Text>
          <TextInput
            value={token}
            onChangeText={(a) => setToken(a)}
            autoFocus
            style={styles.input}
          />
          <RectButton onPress={handleToken} style={styles.button}>
            <Text style={styles.txtButton}>Confirmar código</Text>
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
