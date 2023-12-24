import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("SecondScreen")}
        style={styles.B1}
      >
        <Text style={styles.T1}>Go to second screen</Text>
      </TouchableOpacity>
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
  B1: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#3467ff",
  },

  T1: {
    color: "white",
  },
});

export default FirstScreen;
