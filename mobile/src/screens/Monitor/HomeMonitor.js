import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Theme } from "../../constants/theme";

import {
  Entypo,
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useContext } from "react";
import { CommonContext } from "../../contexts/commonContext";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import Modal from "react-native-modalbox";

import firebase from "firebase/app";
import "firebase/database";
import LogoColetaFacil from "../../assets/icons/LogoColetaFacil";

const cards = [
  {
    icon: <Feather name="trash-2" size={24} color="white" />,
    text: "Descarte seu lixo de forma certa.",
  },
  {
    icon: <MaterialCommunityIcons name="trophy-broken" size={24} color="white" />,
    text: "Embrulhe sempre cacos de vidro.",
  },
  {
    icon: <Entypo name="keyboard" size={24} color="white" />,
    text: "Separe sempre os eletrônicos.",
  },
];

const Home = () => {
  const [location, setlocation] = useState();
  const [iconModal, setIconModal] = useState("");
  const [textModal, setTextModal] = useState("");
  const [onTrucks, setOnTrucks] = useState();
  const [numberTrucksOn, setNumberTrucksOn] = useState(0);

  const calledForeground = useRef();

  const { locationUser, callForegroundGeolocation } = useContext(CommonContext);

  const modalRef = useRef();
  const mapRef = useRef();

  useEffect(() => {
    if (locationUser && locationUser.latitude) {
      let region = {
        latitude: locationUser.latitude,
        longitude: locationUser.longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      };
      setlocation(region);
    }
  }, [locationUser]);

  useEffect(() => {
    async function callForeground() {
      calledForeground.current = true;
      console.log("CHAMOU");
      callForegroundGeolocation(false);
    }
    if (!calledForeground.current) callForeground();
  }, []);

  useEffect(() => {
    const devices = firebase
      .database()
      .ref("devices")
      .orderByChild("onActive")
      .equalTo(true);
    devices.on("value", (snap) => {
      if (snap.val()) {
        setNumberTrucksOn(Object.keys(snap.val()).length);
        setOnTrucks(snap.val());
      } else {
        setNumberTrucksOn(0);
      }
    });
  }, []);

  const centerFollowMap = () => {
    let region = {
      latitude: locationUser.latitude,
      longitude: locationUser.longitude,
      latitudeDelta: 0.0143,
      longitudeDelta: 0.0134,
    };
    mapRef?.current.animateToRegion(region, 500);
  };

  const openModalInfo = (card) => {
    setIconModal(<Entypo name="" size={40} color="black" />);
    setTextModal(card.text);
    modalRef?.current.open();
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        loadingEnabled
        style={styles.map}
        showsMyLocationButton={false}
        region={location ? location : null}
      >
        {onTrucks &&
          Object.keys(onTrucks).map((truck, index) => {
            return (
              <Marker
                coordinate={{
                  latitude: onTrucks[truck].location.lat,
                  longitude: onTrucks[truck].location.lng,
                }}
                anchor={{ x: 0.5, y: 0.5 }}
                key={index}
                title={onTrucks[truck].code}
              >
                <LogoColetaFacil width={40} height={60} />
              </Marker>
            );
          })}
      </MapView>

      <View style={styles.viewTrucksOn}>
        {numberTrucksOn > 0 ? (
          <Text style={styles.textTrucksOn}>
            Há {numberTrucksOn == 1 ? "1 caminhão" : `${numberTrucksOn} caminhões`} em
            funcionamento.
          </Text>
        ) : (
          <Text style={styles.textTrucksOn}>Não há caminhões em funcionamento.</Text>
        )}
      </View>

      <RectButton style={styles.btnCenterMap} onPress={centerFollowMap}>
        <MaterialIcons name="gps-fixed" size={24} color="black" />
      </RectButton>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.containerScroll}
      >
        {cards.map((card, i) => (
          <RectButton
            key={card.text + i}
            onPress={() => openModalInfo(card)}
            style={
              i === cards.length - 1
                ? { ...styles.card, ...styles.lastCard }
                : { ...styles.card }
            }
          >
            <View style={{ marginLeft: 10 }}>{card.icon}</View>
            <Text numberOfLines={2} style={styles.txtCards}>
              {card.text}
            </Text>
          </RectButton>
        ))}
      </ScrollView>

      <Modal style={styles.modal} position={"bottom"} ref={modalRef} swipeArea={100}>
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          showsVerticalScrollIndicator={false}
        >
          <SafeAreaView style={styles.viewWrappedModal}>
            <RectButton
              style={styles.btnTopModal}
              onPress={() => modalRef?.current.close()}
            />
            <View style={{ marginTop: 25 }}>{iconModal}</View>
            <View style={{ marginTop: 25 }}>
              <Text>{textModal}</Text>
            </View>
          </SafeAreaView>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height - 200,
  },
  viewWrappedModal: {
    alignItems: "center",
    justifyContent: "space-around",
    width: Dimensions.get("window").width,
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  btnTopModal: {
    width: 70,
    height: 7,
    borderRadius: 5,
    backgroundColor: Theme.GREY2,
    marginVertical: 10,
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  containerScroll: {
    position: "absolute",
    bottom: 20,
  },
  card: {
    height: 65,
    width: 195,
    borderRadius: 8,
    backgroundColor: Theme.SECONDARY,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  lastCard: {
    marginRight: 10,
  },
  txtCards: {
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: 5,
    fontFamily: "PopRegular",
    fontSize: 13,
    color: Theme.WHITE,
    paddingHorizontal: 10,
  },
  btnCenterMap: {
    position: "absolute",
    bottom: 100,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Theme.WHITE,
    justifyContent: "center",
    alignItems: "center",
  },
  viewTrucksOn: {
    alignSelf: "center",
    marginTop: 70,
    width: 300,
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.WHITE,
    borderWidth: 2,
    borderColor: Theme.PRIMARY,
  },
  textTrucksOn: {
    fontFamily: "PopBold",
    fontSize: 14,
  },
});

export default Home;
