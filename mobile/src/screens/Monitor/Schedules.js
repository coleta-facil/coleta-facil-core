import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  Dimensions,
} from "react-native";

import ScreenTitle from "../../components/ScreenTitle";
import { Theme } from "../../constants/theme";
import { RectButton } from "react-native-gesture-handler";
import Modal from "react-native-modalbox";
import { useRef } from "react";
import { useState } from "react";

import { Ionicons, MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import LogoColetaFacil from "../../assets/icons/LogoColetaFacil";
import Trash from "../../assets/icons/Trash";

const cardsWeek = [
  {
    dayWeek: "Terça-feira",
    clock: "09:30",
  },
  {
    dayWeek: "Quinta-feira",
    clock: "18:30",
  },
  {
    dayWeek: "Sábado",
    clock: "09:30",
  },
];

const Schedules = () => {
  const modalRef = useRef();
  const modalRef2 = useRef();

  const [textModal, setSetTextModal] = useState();
  const [timeModal, setTimeModal] = useState();
  const [activedNotify, setActivedNotify] = useState(false);

  const openModal = (card) => {
    setSetTextModal(card.dayWeek);
    setTimeModal(card.clock);
    modalRef?.current.open();
  };

  const activeNotify = () => {
    setActivedNotify((prev) => !prev);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle align="left">Fique atento!</ScreenTitle>
      <View style={styles.cardTop}>
        <Text style={styles.txtCard}>O caminhão estará em funcionamento hoje!</Text>
        {/* <RectButton>
          <Ionicons
            style={{ marginRight: 40 }}
            name="notifications-outline"
            size={28}
            color={Theme.ALTERNATE}
          />
        </RectButton> */}
      </View>
      <View style={styles.containerCardsWeek}>
        <Text style={styles.titleCardsWeek}>Dias da semana</Text>
        <Text style={styles.localeUser}>Seu bairo: São cristóvão</Text>
        <View style={styles.cardsWeek}>
          <ScrollView
            style={{ width: "100%" }}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {cardsWeek.map((card, index) => (
              <RectButton
                onPress={() => openModal(card)}
                key={card.dayWeek + index}
                style={styles.cardsWeekWrapped}
              >
                <Text style={styles.txtCardsWeek}>{card.dayWeek}</Text>
                <Text style={styles.txtCardsWeek}>{card.clock}</Text>
              </RectButton>
            ))}
          </ScrollView>
        </View>
      </View>
      <Modal position={"center"} style={styles.modal} ref={modalRef} swipeArea={200}>
        <View style={styles.viewWrappedModal}>
          <View style={{ marginTop: 15 }}>
            <LogoColetaFacil />
          </View>
          <View style={{ marginTop: 25 }}>
            <Text style={styles.timeTextxModal}>{timeModal}h</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.dayTextModal}>{textModal}</Text>
          </View>
          {activedNotify ? (
            <>
              <RectButton
                style={[styles.btnActiveNotify, styles.btnActiveNotify2]}
                onPress={activeNotify}
              >
                <Text style={styles.txtActiveNotify}>Lembrete ativo</Text>
                <MaterialIcons
                  style={{ marginLeft: 20 }}
                  name="notifications-active"
                  size={24}
                  color="white"
                />
              </RectButton>
            </>
          ) : (
            <>
              <RectButton style={styles.btnActiveNotify} onPress={activeNotify}>
                <Text style={[styles.txtActiveNotify, styles.txtActiveNotify2]}>
                  Ativar lembrete
                </Text>
                <Ionicons
                  style={{ marginLeft: 20 }}
                  name="notifications-outline"
                  size={28}
                  color={Theme.PRIMARY}
                />
              </RectButton>
            </>
          )}
        </View>
      </Modal>
      <RectButton onPress={() => modalRef2?.current.open()} style={styles.cardInfo}>
        <MaterialCommunityIcons name="dump-truck" size={40} color="white" />
        <Text style={styles.txtCardInfo}>
          Porque descartar o lixo próximo a passagem do caminhão?
        </Text>
      </RectButton>
      <Modal style={styles.modal2} position={"bottom"} ref={modalRef2} swipeArea={100}>
        <ScrollView
          style={{ backgroundColor: "#fff" }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.viewWrappedModal2}>
            <RectButton
              style={styles.btnTopModal}
              onPress={() => modalRef2?.current.close()}
            />
            <Text
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                fontSize: 16,
                fontFamily: "PopBold",
                textAlign: "center",
              }}
            >
              Porque descartar o lixo próximo a passagem do caminhão?
            </Text>
            <View style={{ marginVertical: 15 }}>
              <Trash width={120} height={120} />
            </View>
            <View style={styles.textWrapped}>
              <Text style={styles.textDescriptionInfo}>
                {`\n`}• Evita acúmulos nas ruas.
                {`\n`}• Evita o mau cheiro e impede que sejam abertos e espalhados
                pelo chão.
                {`\n`}• Ajuda na manutenção da limpeza em frente a sua casa, da rua e de
                toda cidade.
                {`\n`}• Evita que crianças, animais e outras pessoas entrem em contato com
                materiais cortantes ou tóxicos.
                {`\n`}• Mantêm a cidade limpa e ajudam o ambiente.
              </Text>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTop: {
    elevation: 10,
    marginTop: 20,
    borderRadius: 8,
    alignSelf: "center",
    height: 70,
    width: "80%",
    backgroundColor: Theme.GREY,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  txtCard: {
    fontFamily: "PopRegular",
    //paddingHorizontal: 25,
    textAlign: "center",
    marginLeft: 10,
    color: Theme.DARK,
  },
  containerCardsWeek: {
    marginTop: 40,
    marginLeft: 20,
  },
  titleCardsWeek: {
    fontFamily: "PopBold",
    fontSize: 19,
  },
  cardsWeek: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardsWeekWrapped: {
    backgroundColor: Theme.PRIMARY,
    width: 125,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  txtCardsWeek: {
    fontFamily: "PopBold",
    color: Theme.WHITE,
    textAlign: "center",
  },
  viewWrappedModal: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    width: 300,
  },
  viewWrappedModal2: {
    alignItems: "center",
    justifyContent: "space-around",
    paddingLeft: 10,
    width: Dimensions.get("window").width,
  },
  modal: {
    alignItems: "center",
    width: 300,
    height: 400,
    borderRadius: 8,
  },
  modal2: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height - 200,
    borderRadius: 8,
  },
  timeTextxModal: {
    fontFamily: "PopBold",
    fontSize: 25,
  },
  dayTextModal: {
    fontFamily: "PopRegular",
    fontSize: 20,
  },
  btnActiveNotify: {
    elevation: 15,
    height: 60,
    marginTop: 60,
    width: 250,
    borderRadius: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    borderColor: Theme.PRIMARY,
    borderWidth: 2,
  },
  btnActiveNotify2: {
    backgroundColor: Theme.PRIMARY,
  },
  txtActiveNotify: {
    fontFamily: "PopBold",
    color: Theme.WHITE,
    fontSize: 16,
  },
  txtActiveNotify2: {
    color: Theme.PRIMARY,
  },
  localeUser: {
    marginVertical: 10,
    fontFamily: "PopRegular",
    fontSize: 16,
  },
  cardInfo: {
    backgroundColor: Theme.ALTERNATE,
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    alignSelf: "center",
    height: 100,
    borderRadius: 8,
    width: Dimensions.get("window").width - 30,
  },
  txtCardInfo: {
    paddingLeft: 10,
    fontFamily: "PopRegular",
    fontSize: 16,
    color: Theme.WHITE,
  },
  btnTopModal: {
    width: 70,
    height: 7,
    borderRadius: 5,
    backgroundColor: Theme.GREY2,
    marginVertical: 10,
  },
  textWrapped: {
    marginHorizontal: 15,
  },
  textDescriptionInfo: {
    fontFamily: "PopRegular",
    fontSize: 17,
    lineHeight: 30,
    textAlign: "left",
  },
});

export default Schedules;
