import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from "../Button";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        type="primary"
        text="Go to second Screen"
        onPress={() => navigation.navigate("SecondScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FirstScreen;
