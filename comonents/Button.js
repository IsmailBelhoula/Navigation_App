import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ text, onPress, B1, style, textColor }) => {
  return (
    <TouchableOpacity
      style={[styles.button, B1 ? styles.B1 : styles.B2, style]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    borderRadius: 15,
  },
  B1: {
    backgroundColor: "#3467ff", // Primary button style
    borderWidth: 1,
    borderColor: "#3467ff",
  },
  B2: {
    borderWidth: 1,
    borderColor: "#3467ff",
  },
  buttonText: {
    textAlign: "center",
  },
});

export default Button;
