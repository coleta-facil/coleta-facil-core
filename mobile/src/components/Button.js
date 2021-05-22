import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Theme } from "../constants/theme";

const Button = ({ children, icon, ...rest }) => {
  return (
    <RectButton style={styles.button} {...rest}>
      <Text style={styles.txtButton}>{children}</Text>
      {icon && icon}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    alignSelf: "center",
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: Theme.PRIMARY,
  },
  txtButton: {
    color: Theme.WHITE,
    fontFamily: "PopBold",
    marginRight: 10,
  },
});

export default Button;
