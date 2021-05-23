import React from "react";
import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";

import { Theme } from "../../constants/theme";

import LogoColetaFacil from "../../assets/icons/LogoColetaFacil";
import { RectButton } from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

import Recycle from "../../assets/icons/Recycle";

const SelectiveCollect = () => {
  const navigation = useNavigation();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.viewTop}>
          <Recycle width={90} height={90} />
          <RectButton
            onPress={() => navigation.goBack()}
            style={{ position: "absolute", left: 15, top: 40 }}
          >
            <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
          </RectButton>
          <Text
            style={{
              marginTop: 25,
              fontFamily: "PopBold",
              fontSize: 20,
              textAlign: "center",
              color: Theme.WHITE,
            }}
          >
            Como funciona a coleta seletiva e Pontos de coleta.
          </Text>
        </View>
        <View style={styles.content}>
          <Text
            style={{
              marginTop: 25,
              marginLeft: 15,
              fontFamily: "PopBold",
              fontSize: 20,
              color: Theme.DARK,
            }}
          >
            Categorias
          </Text>
          <View style={{ paddingHorizontal: 20 }}>
            <Text style={{ fontFamily: "PopBold", fontSize: 16, marginTop: 25 }}>
              🧻 Papel
            </Text>
            <Text
              style={{
                fontFamily: "PopRegular",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 10,
              }}
            >
              • Papéis que tiveram contato com a comida ou molhados não podem ser
              reciclados.
            </Text>
            <Text style={{ fontFamily: "PopBold", fontSize: 16, marginTop: 25 }}>
              🗑 Plástico
            </Text>
            <Text
              style={{
                fontFamily: "PopRegular",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 10,
              }}
            >
              • Plásticos que não podem ser lavados e reutilizados e isopor,quando não
              puder ser reutilizado deve ser descartado junto ao plástico.
            </Text>
            <Text style={{ fontFamily: "PopBold", fontSize: 16, marginTop: 25 }}>
              🧿 Vidro
            </Text>
            <Text
              style={{
                fontFamily: "PopRegular",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 10,
              }}
            >
              • Lâmpadas, espelhos, cristais, vidros temperados, porcelana e cerâmica não
              são recicláveis.
            </Text>
            <Text style={{ fontFamily: "PopBold", fontSize: 16, marginTop: 25 }}>
              ⛓ Metais
            </Text>
            <Text
              style={{
                fontFamily: "PopRegular",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 10,
              }}
            >
              • Canos, esponjas de aço e grampos, não são recicláveis.
            </Text>
            <Text style={{ fontFamily: "PopBold", fontSize: 16, marginTop: 25 }}>
              🔋 Pilhas, baterias e partes de eletroeletrônicos
            </Text>
            <Text
              style={{
                fontFamily: "PopRegular",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 10,
                marginBottom: 50,
              }}
            >
              • Esse tipo de material deve ser devolvido aos fabricantes ou depositado em
              coletores específicos. {`\n\n`}• Descarte cada um com sua categoria e ajude
              o planeta, a sua cidade e outras pessoas que trabalham com a reciclagem!
            </Text>

            <Text
              style={{
                fontFamily: "PopBold",
                fontSize: 16,
                marginTop: 15,
                textAlign: "center",
              }}
            >
              Destino do lixo da sua cidade
            </Text>
            <Text
              style={{
                fontFamily: "PopRegular",
                fontSize: 16,
                lineHeight: 20,
                marginTop: 10,
                marginBottom: 50,
                textAlign: "justify",
              }}
            >
              {`\t`}Todo resíduo coletado no município, tanto doméstico quanto hospitalar,
              é destinado ao aterro sanitário municipal, localizado as margens da BR-153,
              há cerca de 30km do Centro da cidade. O tratamento realizado no local é
              monitorado e atende às normas de controle ambiental.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewTop: {
    height: 270,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Theme.ALTERNATE,
  },
});

export default SelectiveCollect;
