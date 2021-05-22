import React from "react";
import { StyleSheet, Text } from "react-native";

const ScreenTitle = ({ children, align = "center" }) => {
  return <Text style={{ ...styles.title, textAlign: align }}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "PopBold",
    fontSize: 23,
    marginTop: 50,
    marginHorizontal: 15,
  },
});

export default ScreenTitle;
