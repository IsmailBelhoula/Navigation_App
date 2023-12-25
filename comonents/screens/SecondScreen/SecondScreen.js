import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import NumControler from "./NumControler";
import Store from "./Store";
import { Provider } from "react-redux";
import Button from "../../Button";
const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Button
          type="secondary"
          text="Go to main Screen"
          onPress={() => navigation.navigate("FirstScreen")}
        />
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
});

export default SecondScreen;
