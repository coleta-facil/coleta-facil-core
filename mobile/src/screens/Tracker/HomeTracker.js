import React, { useRef, useContext, useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { Theme } from "../../constants/theme";

import { CommonContext } from "../../contexts/commonContext";

import firebase from "firebase/app";
import "firebase/database";

const HomeTracker = () => {
  const mapRef = useRef();
  const calledForeground = useRef();
  const [activedLoc, setActivedLoc] = useState(false);
  const { locationUser, idDevice, callForegroundGeolocation } = useContext(CommonContext);

  const [location, setLocation] = useState();

  useEffect(() => {
    if (locationUser && locationUser.latitude) {
      let region = {
        latitude: locationUser.latitude,
        longitude: locationUser.longitude,
        latitudeDelta: 0.0143,
        longitudeDelta: 0.0134,
      };
      setLocation(region);
    }
  }, [locationUser]);

  useEffect(() => {
    async function callForeground() {
      calledForeground.current = true;
      callForegroundGeolocation(true);
    }
    if (!calledForeground.current) callForeground();
  }, []);

  const toggleLoc = async () => {
    if (idDevice) {
      await firebase
        .database()
        .ref("devices/" + idDevice + "/")
        .update({
          onActive: !activedLoc,
        });
        setActivedLoc((prev) => !prev);
      }
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
      />
      {activedLoc && (
        <View style={styles.viewInfo}>
          <Text style={[styles.txtTop, { fontFamily: "PopBold" }]}>Tudo Certo!</Text>
          <Text style={[styles.txtTop, { fontFamily: "PopRegular" }]}>
            Você está enviando sua localização ao servidor.
          </Text>
        </View>
      )}
      <RectButton
        onPress={() => toggleLoc()}
        style={[
          styles.btnActiveLoc,
          {
            backgroundColor: activedLoc == true ? Theme.PRIMARY : Theme.SECONDARY,
          },
        ]}
      >
        <Text style={styles.txtActiveLoc}>{`${
          activedLoc == true ? "Localização\nativa" : "Ativar\nlocalização"
        }`}</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
  },
  txtTop: {
    textAlign: "center",
    color: Theme.PRIMARY,
  },
  btnActiveLoc: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: "center",
    position: "absolute",
    bottom: 60,
    justifyContent: "center",
    alignItems: "center",

    elevation: 15,
  },
  txtActiveLoc: {
    fontFamily: "PopBold",
    color: Theme.WHITE,
    textAlign: "center",
  },
  viewInfo: {
    width: "90%",
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    marginTop: 50,
    alignSelf: "center",
    borderRadius: 10,
    elevation: 15,
  },
});

export default HomeTracker;
