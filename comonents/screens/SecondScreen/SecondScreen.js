import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NumControler from "./NumControler";
import Store from "./Store";
import { Provider } from "react-redux";
const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("FirstScreen")}
          style={styles.B2}
        >
          <Text style={styles.T2}>Go to second screen</Text>
        </TouchableOpacity>
      </View>
      <Provider store={Store}>
        <NumControler />
      </Provider>
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
  iconscontainer: {
    marginHorizontal: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  B2: {
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#3467ff",
  },

  T2: {
    color: "#3467ff",
  },
});

export default SecondScreen;
