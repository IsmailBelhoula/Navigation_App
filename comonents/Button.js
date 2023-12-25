import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ type, text, onPress }) => {
  const buttonStyle = type === "secondary" ? styles.B2 : styles.B1;
  const textStyle = type === "secondary" ? styles.T2 : styles.T1;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  B1: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#3467ff",
  },
  B2: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#3467ff",
  },
  T1: {
    color: "white",
  },

  T2: {
    color: "#3467ff",
  },
});

export default Button;
